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
  readonly conversationMemory = signal<string[]>([]);
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
    this.conversationMemory.set([]);
  }

  chooseAction(index: number): void {
    if (this.selectedAnswer() !== null || this.complete()) {
      return;
    }

    this.selectedAnswer.set(index);
    this.decisions.update((decisions) => [...decisions, index === this.currentScenario().answer]);
    this.conversationMemory.update((memory) => [...memory, this.currentScenario().responseMemory[index]]);
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
    return index === this.selectedAnswer() ? 'selected' : '';
  }

  response(): string {
    return this.selectedAnswer() === this.currentScenario().answer
      ? this.currentScene().goodReaction
      : this.currentScene().needsWorkReaction;
  }

  responseDialogue(): string {
    const answer = this.selectedAnswer();
    return answer === null
      ? this.currentScene().dialogue
      : this.currentScenario().responseReactions[answer];
  }

  isProfessionalChoice(): boolean {
    return this.selectedAnswer() === this.currentScenario().answer;
  }

  answerStatus(): string {
    return this.isProfessionalChoice() ? '✓ PROFESSIONAL CHOICE' : '✕ UNPROFESSIONAL CHOICE';
  }

  answerTitle(): string {
    return this.isProfessionalChoice() ? 'Well done, Mr. Sara!' : 'Not quite, Mr. Sara.';
  }

  answerGuidance(): string {
    const answer = this.selectedAnswer();
    return answer === null ? '' : this.currentScenario().responseGuidance[answer];
  }

  scenarioStatus(index: number): 'professional' | 'needs-improvement' | 'not-completed' {
    const decision = this.decisions()[index];
    if (decision === undefined) {
      return 'not-completed';
    }

    return decision ? 'professional' : 'needs-improvement';
  }

  scenarioStatusLabel(index: number): string {
    const status = this.scenarioStatus(index);
    if (status === 'professional') return 'Professional choice';
    if (status === 'needs-improvement') return 'Needs improvement';
    return 'Not completed';
  }

  memoryLine(): string {
    const memory = this.conversationMemory();
    return memory.length > 1 ? memory[memory.length - 1] : '';
  }

  professionalCommunication(): string {
    return this.decisions()[2] ? 'Strong' : 'Developing';
  }

  diningEtiquette(): string {
    const decisions = this.decisions();
    return decisions[1] && decisions[3] ? 'Strong' : 'Developing';
  }

  socialAwareness(): string {
    const decisions = this.decisions();
    return decisions[0] && decisions[3] ? 'Strong' : 'Developing';
  }

  networkingBehavior(): string {
    return this.decisions()[2] ? 'Strong' : 'Developing';
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
