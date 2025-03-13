const youtubePatterns = [
  /youtu\.be\/([^#&?]{11})/, // youtu.be/<id>
  /\?v=([^#&?]{11})/, // ?v=<id>
  /&v=([^#&?]{11})/, // &v=<id>
  /embed\/([^#&?]{11})/, // embed/<id>
  /\/v\/([^#&?]{11})/, // /v/<id>
];

export const getYoutubeId = (url?: string): string | null => {
  if (!url) return null;
  for (const p of youtubePatterns) {
    const execArr = p.exec(url);
    if (execArr) {
      return execArr[1];
    }
  }

  return null;
};
