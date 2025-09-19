import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
import timeLine from '@/components/timeLine.vue'
import { createVuetify, useDisplay } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { computed } from 'vue'
import type { DisplayInstance } from 'vuetify' // Import DisplayInstance

// Helper function to create a mock DisplayInstance
const createMockDisplayInstance = (overrides: Partial<DisplayInstance> = {}): DisplayInstance => {
  return {
    mdAndUp: computed(() => false),
    xs: computed(() => false),
    sm: computed(() => false),
    md: computed(() => false),
    lg: computed(() => false),
    xl: computed(() => false),
    mobile: computed(() => false),
    name: 'md',
    height: 0,
    width: 0,
    thresholds: { xs: 0, sm: 600, md: 960, lg: 1280, xl: 1920 },
    displayClasses: computed(() => ({})),
    ssr: false, // Moved to top level
    platform: {
      android: false,
      ios: false,
      edge: false,
      electron: false,
      chrome: false,
      firefox: false,
      opera: false,
      safari: false,
      webkit: false,
      mac: false,
      windows: false,
      linux: false,
      touch: false,
      mobile: false,
      desktop: false,
      blackberry: false,
      cordova: false,
      capacitor: false,
      native: false,
    },
    update: () => {},
    ...overrides,
  } as DisplayInstance;
};

// Mock the entire vuetify module
vi.mock('vuetify', async importOriginal => {
  const actual = await importOriginal() as object;
  return {
    ...actual,
    useDisplay: vi.fn(() => createMockDisplayInstance()), // Use the helper function
  }
})

describe('timeLine.vue', () => {
  const vuetify = createVuetify({ components, directives })

  it('renders horizontal timeline on large screens', () => {
    // Arrange
    vi.mocked(useDisplay).mockReturnValue(createMockDisplayInstance({
      mdAndUp: computed(() => true),
    }) as any)

    const wrapper = mount(timeLine, {
      global: {
        plugins: [vuetify],
      },
    })

    // Assert
    const horizontalTimeline = wrapper.find('.v-timeline--horizontal')
    expect(horizontalTimeline.exists()).toBe(true)

    const verticalTimeline = wrapper.find('.v-timeline--vertical')
    expect(verticalTimeline.exists()).toBe(false)
  })

  it('renders vertical timeline on small screens', () => {
    // Arrange
    vi.mocked(useDisplay).mockReturnValue(createMockDisplayInstance({
      mdAndUp: computed(() => false),
    }) as any)

    const wrapper = mount(timeLine, {
      global: {
        plugins: [vuetify],
      },
    })

    // Assert
    const horizontalTimeline = wrapper.find('.v-timeline--horizontal')
    expect(horizontalTimeline.exists()).toBe(false)

    const verticalTimeline = wrapper.find('.v-timeline--vertical')
    expect(verticalTimeline.exists()).toBe(true)
  })

  it('renders the correct content in the timeline items', () => {
    // Arrange
    vi.mocked(useDisplay).mockReturnValue(createMockDisplayInstance({
      mdAndUp: computed(() => true),
    }) as any)

    const wrapper = mount(timeLine, {
      global: {
        plugins: [vuetify],
      },
    })

    // Assert
    const timelineText = wrapper.text()
    expect(timelineText).toContain('Selbstständig')
    expect(timelineText).toContain('Mammut Media')
    expect(timelineText).toContain('Docunite Gmbh')
    expect(timelineText).toContain('Umschulung')
    expect(timelineText).toContain('x - 2018')
    expect(timelineText).toContain('2018-2019')
    expect(timelineText).toContain('2020-2024')
    expect(timelineText).toContain('2025')
  })
})
