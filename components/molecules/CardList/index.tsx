import React, { ReactNode } from 'react'
import classNames from 'classnames'

import { Card } from '..'

export interface CardListProps {
  texts?: string[]
  classes?: string
  children?: ReactNode
  innerRef?: any
}

export const CardList = ({
  texts = [''],
  classes,
  innerRef
}: CardListProps) => (
  <div className={classNames(classes)} ref={innerRef}>
    {texts?.map((text, index) => (
      <Card
        key={text + index}
        id={text + index}
        index={index}
        text={text}
        classes={'rounded-md bg-white shadow-md mb-1'}
      />
    ))}
  </div>
)
