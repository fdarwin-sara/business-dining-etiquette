export interface SceneHotspot {
  label: string;
  detail: string;
  top: string;
  left: string;
}

export interface ExperienceScene {
  eyebrow: string;
  dialogue: string;
  atmosphere: string;
  image: string;
  imageAlt: string;
  hostName: string;
  hostRole: string;
  correctResponse: string;
  incorrectResponse: string;
  goodReaction: string;
  needsWorkReaction: string;
  hotspots?: SceneHotspot[];
}
