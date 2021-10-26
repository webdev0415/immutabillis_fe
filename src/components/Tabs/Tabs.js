import { useEffect, useState } from 'react'
import classNames from 'classnames'

import classes from './Tabs.module.scss'

export const Tabs = ({ className, children }) => {
  const [tabs, setTabs] = useState([])
  const [activeTab, setActiveTab] = useState(null)

  useEffect(() => {
    const extractedTabs = []

    children.forEach((child) => {
      extractedTabs.push({
        label: child.props.label,
        for: `tab-${child.props.label.replace(' ', '-').toLowerCase()}`,
        content: child,
      })
    })

    setTabs(extractedTabs)
    setActiveTab(extractedTabs[0].for)
  }, [children])

  return (
    <section className={classNames(classes.tabs, className, 'container')}>
      <div className={classes['list-container']}>
        <ul className={classes.list}>
          {tabs.map((tab) => (
            <li
              key={tab.for}
              onClick={() => setActiveTab(tab.for)}
              className={classNames(classes.item, {
                [classes['item--active']]: tab.for === activeTab,
              })}
            >
              {tab.label}
            </li>
          ))}
        </ul>
      </div>

      {tabs.map((tab) => (
        <div
          className={classNames(classes.content, {
            [classes['content--active']]: tab.for === activeTab,
          })}
          key={tab.for}
          id={tab.for}
        >
          {tab.content}
        </div>
      ))}
    </section>
  )
}
