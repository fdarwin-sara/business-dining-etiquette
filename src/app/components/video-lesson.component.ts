import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { VideoLesson } from '../models/video-lesson';

@Component({
  selector: 'app-video-lesson',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="video-lesson" aria-label="Video lesson">
      <div class="video-lesson-copy">
        <p class="eyebrow">{{ lesson().label }}</p>
        @if (lesson().sectionTitle) {
          <p class="video-section-title">{{ lesson().sectionTitle }}</p>
          <p class="video-section-subtitle">{{ lesson().sectionSubtitle }}</p>
        }
        <h2>{{ lesson().title }}</h2>
        <p>{{ lesson().description }}</p>
        <small>Presented by {{ lesson().creator }}</small>
        <a class="video-link" [href]="'https://www.youtube.com/watch?v=' + lesson().videoId" target="_blank" rel="noopener noreferrer">
          Watch on YouTube <span>↗</span>
        </a>
      </div>
      <div class="video-frame">
        <iframe
          [src]="embedUrl()"
          [title]="lesson().title"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen>
        </iframe>
      </div>
    </section>
  `,
  styles: [`
    :host { display:block; }
    .video-lesson { align-items:center; background:#eee8dd; border-radius:2px; display:grid; gap:60px; grid-template-columns:.8fr 1.2fr; margin:0 auto 100px; max-width:1040px; padding:58px 5%; }
    .video-lesson-copy h2 { color:#183d35; font-family:'Playfair Display',serif; font-size:clamp(2rem,4vw,3.8rem); font-weight:500; letter-spacing:-.04em; line-height:1; margin:15px 0 20px; }
    .video-section-title { color:#183d35; font-family:'Playfair Display',serif; font-size:clamp(2.2rem,4vw,3.8rem); line-height:1; margin:14px 0 8px; }
    .video-section-subtitle { color:#6b756f; font-size:.9rem; line-height:1.6; margin:0 0 28px; }
    .video-lesson-copy>p:not(.eyebrow) { color:#6b756f; font-size:.9rem; line-height:1.7; margin-bottom:18px; }
    .video-lesson-copy small { color:#6b756f; display:block; font-size:.68rem; line-height:1.5; }
    .video-link { border-bottom:1px solid #c5a46d; color:#183d35; display:inline-flex; font-size:.7rem; font-weight:700; gap:12px; letter-spacing:.08em; margin-top:25px; padding-bottom:6px; text-transform:uppercase; }
    .video-link span { color:#c5a46d; font-size:1rem; }
    .video-frame { aspect-ratio:16 / 9; background:#183d35; border-radius:10px; box-shadow:0 18px 35px rgba(24,61,53,.16); overflow:hidden; }
    .video-frame iframe { border:0; height:100%; width:100%; }
    @media (max-width:760px) {
      .video-lesson { display:block; margin:0 6% 70px; padding:38px 7%; }
      .video-frame { margin-top:30px; }
    }
  `],
})
export class VideoLessonComponent {
  private readonly sanitizer = inject(DomSanitizer);
  readonly lesson = input.required<VideoLesson>();
  readonly embedUrl = computed(() => this.sanitizer.bypassSecurityTrustResourceUrl(
    `https://www.youtube-nocookie.com/embed/${this.lesson().videoId}`,
  ));
}
