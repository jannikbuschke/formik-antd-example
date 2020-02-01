import * as React from 'react'
import { Button } from 'antd'
import { GithubFilled, TwitterOutlined } from '@ant-design/icons'

export const Header = () => (
  <div className='Header'>
    <h2 style={{ color: '#565656' }}>simple declarative bindings</h2>
    <h1 style={{ fontWeight: 550, marginTop: 0 }}>
      <a href='https://github.com/jaredpalmer/formik' target='_blank'>
        Formik
      </a>{' '}
      +{' '}
      <a href='https://ant.design' target='_blank'>
        Ant Design
      </a>
    </h1>
    <Button.Group>
      <Button
        href='https://www.github.com/jannikbuschke/formik-antd'
        target='_blank'
        style={{ background: '#211F1F', color: 'white' }}
      >
        <span>Github </span>
        <GithubFilled style={{ color: 'white' }} />
      </Button>
      <Button
        href='https://www.twitter.com/jannikbuschke'
        target='_blank'
        style={{ background: '#00acee', color: 'white' }}
      >
        <span>Twitter </span>
        <TwitterOutlined style={{ color: 'white' }} />
      </Button>
    </Button.Group>
  </div>
)
