import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import timeLine from '@/components/timeLine.vue'

describe('timeLine.vue', () => {
  it('renders all career stations', () => {
    const wrapper = mount(timeLine)
    const items = wrapper.findAll('.tl-item')
    expect(items.length).toBe(5)
  })

  it('renders the correct content in the timeline items', () => {
    const wrapper = mount(timeLine)
    const text = wrapper.text()

    expect(text).toContain('Freelance')
    expect(text).toContain('Mammut Media')
    expect(text).toContain('Docunite GmbH')
    expect(text).toContain('Umschulung')
    expect(text).toContain('Certification')
    expect(text).toContain('2018 – 2019')
    expect(text).toContain('2020 – 2024')
    expect(text).toContain('2025')
  })

  it('marks the current station', () => {
    const wrapper = mount(timeLine)
    const current = wrapper.find('.tl-item.now')
    expect(current.exists()).toBe(true)
    expect(current.text()).toContain('Umschulung')
  })
})
