import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import CardProject from './index.vue'

interface CardPostProps {
  type: string
  title: string
  description: string
  image: string
  url: string
}

describe('CardProject', () => {
  it('should render CardProject', () => {
    const wrapper = mount(CardProject, {
      propsData: {
        type: 'Frontend',
        title: 'Nuxt Finance',
        description: 'Sistema de gerenciamento de finanças pessoais.',
        image:
          'https://res.cloudinary.com/gabrielcaiana/image/upload/f_auto,q_auto/gabrielcaiana-site/nuxt-finance.png',
        url: 'https://github.com/gabrielcaiana/nuxt-finance',
      } as CardPostProps,
    })
    expect(wrapper.exists()).toBeTruthy()
    expect(wrapper).toMatchSnapshot()
  })
})
