import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { QUIZ_QUESTIONS } from './data/quiz-questions';
import { VIDEO_LESSONS } from './data/video-lessons';
import { BusinessDinnerSimulatorComponent } from './pages/business-dinner-simulator.component';
import { VideoLessonComponent } from './components/video-lesson.component';

@Component({
  selector: 'app-root',
  imports: [BusinessDinnerSimulatorComponent, VideoLessonComponent, CommonModule, RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  private readonly router = inject(Router);
  readonly path = signal(this.router.url);
  readonly page = computed(() => this.path().split('?')[0]);
  readonly quizQuestions = QUIZ_QUESTIONS;
  readonly quizIndex = signal(0);
  readonly selectedAnswer = signal<number | null>(null);
  readonly score = signal(0);
  readonly quizComplete = signal(false);
  readonly mobileMenu = signal(false);
  readonly currentQuestion = computed(() => QUIZ_QUESTIONS[this.quizIndex()]);
  readonly progress = computed(() => ((this.quizIndex() + 1) / QUIZ_QUESTIONS.length) * 100);
  readonly videoLessons = VIDEO_LESSONS;
  readonly surveyImportance = signal('');
  readonly surveyNapkin = signal('');
  readonly surveyUtensils = signal('');
  readonly surveyTopics = signal('');
  readonly surveyListening = signal('');
  readonly surveyOrdering = signal('');
  readonly surveyConfidence = signal('');
  readonly surveyLearning = signal('');
  readonly surveySubmitted = signal(false);
  readonly surveyAttempted = signal(false);
  readonly surveyProgress = computed(() => [
    this.surveyImportance(), this.surveyNapkin(), this.surveyUtensils(), this.surveyTopics(),
    this.surveyListening(), this.surveyOrdering(), this.surveyConfidence(), this.surveyLearning(),
  ].filter((answer) => answer.trim().length > 0).length);

  constructor() {
    this.router.events.pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event) => {
        this.path.set(event.urlAfterRedirects);
        this.mobileMenu.set(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
  }

  toggleMenu(): void { this.mobileMenu.update((open) => !open); }
  chooseAnswer(index: number): void { if (this.selectedAnswer() === null) this.selectedAnswer.set(index); }
  nextQuestion(): void {
    if (this.selectedAnswer() === this.currentQuestion().answer) this.score.update((value) => value + 1);
    if (this.quizIndex() === QUIZ_QUESTIONS.length - 1) this.quizComplete.set(true);
    else { this.quizIndex.update((value) => value + 1); this.selectedAnswer.set(null); }
  }
  restartQuiz(): void {
    this.quizIndex.set(0); this.selectedAnswer.set(null); this.score.set(0); this.quizComplete.set(false);
  }
  answerClass(index: number): string {
    if (this.selectedAnswer() === null) return '';
    if (index === this.currentQuestion().answer) return 'correct';
    return index === this.selectedAnswer() ? 'incorrect' : '';
  }
  resultMessage(): string {
    const result = this.score();
    return result >= 7 ? 'You are ready to bring confidence and courtesy to the table.' :
      result >= 5 ? 'You have a strong foundation. Review a few details before your next dinner.' :
        'Keep practicing. A little preparation goes a long way in a professional setting.';
  }
  submitSurvey(event: Event): void {
    event.preventDefault();
    this.surveyAttempted.set(true);
    if (this.surveyProgress() === 8) this.surveySubmitted.set(true);
  }
}
