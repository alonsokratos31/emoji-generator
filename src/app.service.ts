import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getEmoji(index?: number) {
    console.log(`Route handler`);
    const emojis = this.getEmojis();
    const emojiIndex =
      typeof index !== `undefined`
        ? index
        : Math.floor(Math.random() * emojis.length);
    return emojis[emojiIndex];
  }

  getEmojis() {
    return [
      `🚀`,
      `🔥`,
      `👍`,
      `🙌`,
      `👋`,
      `👏`,
      `🎉`,
      `🤩`,
      `🥳`,
      `🤘`,
      `🤙`,
      `👌`,
      `👊`,
      `👀`,
    ];
  }
}
