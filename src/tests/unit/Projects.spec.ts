import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import Projects from '@/components/Projects.vue'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

describe('Projects.vue', () => {
  const vuetify = createVuetify({ components, directives })

  it('renders all projects', () => {
    const wrapper = mount(Projects, {
      global: {
        plugins: [vuetify],
      },
    })

    const projectCards = wrapper.findAll('.project-card')
    expect(projectCards.length).toBe(3)
  })

  it('renders project content correctly', () => {
    const wrapper = mount(Projects, {
      global: {
        plugins: [vuetify],
      },
    })

    const firstCard = wrapper.find('.project-card')
    const cardText = firstCard.text()

    expect(cardText).toContain('Twitch Chat Bot')
    expect(cardText).toContain('A Twitch chat bot that alerts the chat whenever someone subscribes, gifts subs, or cheers with Bits. It can also be used as a quiz bot.')
    expect(cardText).toContain('Javascript')
    expect(cardText).toContain('Express')
    expect(firstCard.find('a').attributes('href')).toBe('https://github.com/Tzyber/twitchChatBot')
  })
})
