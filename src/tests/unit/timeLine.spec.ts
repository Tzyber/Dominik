import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
import timeLine from '@/components/timeLine.vue'
import { createVuetify, useDisplay } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { computed } from 'vue'

vi.mock('vuetify', async importOriginal => {
  const actual = await importOriginal()
  return {
    ...(actual as object),
    useDisplay: vi.fn(),
  }
})

describe('timeLine.vue', () => {
  const vuetify = createVuetify({ components, directives })

  it('renders horizontal timeline on large screens', () => {
    // Arrange
    vi.mocked(useDisplay).mockReturnValue({
      mdAndUp: computed(() => true),
    })

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
    vi.mocked(useDisplay).mockReturnValue({
      mdAndUp: computed(() => false),
    })

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
    vi.mocked(useDisplay).mockReturnValue({
      mdAndUp: computed(() => true),
    })

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
