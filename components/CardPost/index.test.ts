import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import CardPost from './index.vue'

interface CardPostProps {
  title: string
  description: string
  image: string
  path: string
}

describe('CardPost', () => {
  it('should render CardPost', () => {
    const wrapper = mount(CardPost, {
      propsData: {
        title: 'O que são micro frontends',
        description:
          'O termo Micro Frontends surgiu pela primeira vez no ThoughtWorks Technology Radar no final de 2016. Ele estende os conceitos de microsserviços para o mundo do frontend.',
        image:
          'https://res.cloudinary.com/gabrielcaiana/image/upload/f_auto,q_auto/gabrielcaiana-site/example-microfrontends.png',
        path: '/what-are-micro-frontends',
      } as CardPostProps,
    })
    expect(wrapper.exists()).toBeTruthy()
    expect(wrapper).toMatchSnapshot()
  })
})
