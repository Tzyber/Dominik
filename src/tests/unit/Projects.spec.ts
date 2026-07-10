import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import Projects from '@/components/Projects.vue'

describe('Projects.vue', () => {
  it('renders all projects', () => {
    const wrapper = mount(Projects)
    const projectCards = wrapper.findAll('.project-card')
    expect(projectCards.length).toBe(3)
  })

  it('renders project content correctly', () => {
    const wrapper = mount(Projects)
    const firstCard = wrapper.find('.project-card')
    const cardText = firstCard.text()

    expect(cardText).toContain('Twitch Chat Bot')
    expect(cardText).toContain('quiz bot')
    expect(cardText).toContain('JavaScript')
    expect(cardText).toContain('Express')
    expect(firstCard.find('a').attributes('href')).toBe('https://github.com/Tzyber/twitchChatBot')
  })
})
