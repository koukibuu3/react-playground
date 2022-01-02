import React from 'react'
import Link from 'react-router-dom'

const Home: React.VFC = () => (
  <>
    <h2>Home</h2>
    <ul>
      <li>
        <Link to="/">トップページへ</Link>
      </li>
      <li>
        <Link
          to="{{
            pathname: '/contact',
            search: '?from=here',
            hash: '#subject',
            state: { secretCode: '8yUfa9KECH' },
          }}"
        >
          お問い合わせ
        </Link>
      </li>
      <li>
        <Link to="/anywhere">どこか</Link>
      </li>
    </ul>
  </>
)

export default Home
