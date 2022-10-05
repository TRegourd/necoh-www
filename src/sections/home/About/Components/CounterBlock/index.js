import React from "react"
import Counter from "./style"

export default function CounterBlock({ numbers, ...rest }) {
  return (
    <Counter {...rest}>
      <Counter.Wrapper>
        {numbers?.map(item => {
          return (
            <Counter.Single key={item.number + item.text}>
              <Counter.Title as="h3" fontColor="#fff">
                <span className="counter">{item.number}</span>
              </Counter.Title>
              <Counter.Text fontColor="#ffffffb3">{item.text}</Counter.Text>{" "}
            </Counter.Single>
          )
        })}
      </Counter.Wrapper>
    </Counter>
  )
}
