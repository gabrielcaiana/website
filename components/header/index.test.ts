import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Header from './index.vue'

describe('Header', () => {
  it('should render Header', () => {
    const wrapper = mount(Header)
    expect(wrapper.exists()).toBeTruthy()
    expect(wrapper).toMatchSnapshot()
  })
})
