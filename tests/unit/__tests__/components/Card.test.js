import { render, cleanup } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import { axe, toHaveNoViolations } from 'jest-axe';
import * as stories from '../../../../components/Card/Card.stories';

expect.extend(toHaveNoViolations);

describe('Card', () => {
  afterEach(() => {
    cleanup();
  });

  describe('Accessibility', () => {
    const ComposedStories = composeStories(stories);

    for (const storyName in ComposedStories) {
      const ComposedStory = ComposedStories[storyName];

      // Run axe
      it(`${storyName} should have no accessibility violations`, async () => {
        const { container } = render(<ComposedStory />);
        const results = await axe(container);
        // TODO: `TypeError: range.getClientRects is not a function` - feature unsupported in your environment. Skipping color-contrast rule.
        expect(results).toHaveNoViolations();
      });
    }
  });
});
