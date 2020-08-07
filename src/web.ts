import { WebPlugin } from '@capacitor/core';
import { ReviewPlugin } from './definitions';

export class ReviewWeb extends WebPlugin implements ReviewPlugin {
  constructor() {
    super({
      name: 'Review',
      platforms: ['web'],
    });
  }

  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}

const Review = new ReviewWeb();

export { Review };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(Review);
