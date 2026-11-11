import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DINING_SCENARIOS } from '../data/dining-scenarios';
import { EXPERIENCE_SCENES } from '../data/experience-scenes';
import { DiningScenario } from '../models/dining-scenario';

@Component({
  selector: 'app-business-dinner-simulator',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './business-dinner-simulator.component.html',
  styleUrl: './business-dinner-simulator.component.scss',
})
export class BusinessDinnerSimulatorComponent {
  readonly scenarios = DINING_SCENARIOS;
  readonly scenes = EXPERIENCE_SCENES;
  readonly started = signal(false);
  readonly sceneIndex = signal(0);
  readonly selectedAnswer = signal<number | null>(null);
  readonly decisions = signal<boolean[]>([]);
  readonly exploredHotspots = signal<string[]>([]);
  readonly activeHotspot = signal<string | null>(null);
  readonly hotspotClosing = signal(false);
  readonly currentScenario = computed(() => this.scenarios[this.sceneIndex()]);
  readonly currentScene = computed(() => this.scenes[this.sceneIndex()]);
  readonly progress = computed(() => ((this.sceneIndex() + 1) / this.scenarios.length) * 100);
  readonly correctCount = computed(() => this.decisions().filter((decision) => decision).length);
  readonly score = computed(() => this.correctCount() * 20);
  readonly complete = computed(() => this.started() && this.sceneIndex() === this.scenarios.length);
  private hotspotCloseTimer: ReturnType<typeof setTimeout> | null = null;

  startExperience(): void {
    this.started.set(true);
    this.sceneIndex.set(0);
    this.selectedAnswer.set(null);
    this.decisions.set([]);
    this.exploredHotspots.set([]);
    this.activeHotspot.set(null);
    this.hotspotClosing.set(false);
    this.clearHotspotCloseTimer();
  }

  chooseAction(index: number): void {
    if (this.selectedAnswer() !== null || this.complete()) {
      return;
    }

    this.selectedAnswer.set(index);
    this.decisions.update((decisions) => [...decisions, index === this.currentScenario().answer]);
  }

  exploreHotspot(label: string): void {
    this.clearHotspotCloseTimer();
    this.hotspotClosing.set(false);
    this.exploredHotspots.update((hotspots) => hotspots.includes(label) ? hotspots : [...hotspots, label]);
    this.activeHotspot.set(label);
  }

  closeHotspot(): void {
    if (!this.activeHotspot()) {
      return;
    }

    this.hotspotClosing.set(true);
    this.clearHotspotCloseTimer();
    this.hotspotCloseTimer = setTimeout(() => {
      this.activeHotspot.set(null);
      this.hotspotClosing.set(false);
      this.hotspotCloseTimer = null;
    }, 180);
  }

  isHotspotExplored(label: string): boolean {
    return this.exploredHotspots().includes(label);
  }

  continueExperience(): void {
    if (this.selectedAnswer() === null) {
      return;
    }

    this.sceneIndex.update((index) => index + 1);
    this.selectedAnswer.set(null);
    this.exploredHotspots.set([]);
    this.activeHotspot.set(null);
    this.hotspotClosing.set(false);
    this.clearHotspotCloseTimer();
  }

  replayExperience(): void {
    this.startExperience();
  }

  hideBrokenImage(event: Event): void {
    const image = event.target as HTMLImageElement | null;
    if (image) {
      image.style.display = 'none';
    }
  }

  private clearHotspotCloseTimer(): void {
    if (this.hotspotCloseTimer !== null) {
      clearTimeout(this.hotspotCloseTimer);
      this.hotspotCloseTimer = null;
    }
  }

  answerClass(index: number): string {
    if (this.selectedAnswer() === null) {
      return '';
    }

    if (index === this.currentScenario().answer) {
      return 'correct';
    }

    return index === this.selectedAnswer() ? 'incorrect' : '';
  }

  response(): string {
    return this.selectedAnswer() === this.currentScenario().answer
      ? this.currentScene().goodReaction
      : this.currentScene().needsWorkReaction;
  }

  responseDialogue(): string {
    return this.selectedAnswer() === this.currentScenario().answer
      ? this.currentScene().correctResponse
      : this.currentScene().incorrectResponse;
  }

  performanceMessage(): string {
    const score = this.score();
    if (score === 100) return 'Excellent! You demonstrated professional dining etiquette and communication skills.';
    if (score >= 60) return 'You handled the evening thoughtfully. A few small refinements will make your professional presence even stronger.';
    return 'Every professional starts somewhere. Use these moments as practice for your next opportunity.';
  }

  missedScenarios(): DiningScenario[] {
    return this.scenarios.filter((_, index) => this.decisions()[index] === false);
  }
}
