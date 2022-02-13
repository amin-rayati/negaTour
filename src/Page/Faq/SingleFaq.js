import { React, useState } from 'react'

const SingleFaq = ({ data }) => {
  const [state, setState] = useState(false)
  const { questionAnswer, questionTitle } = data
  return (
    <>
      <div class=''>
        <div class='accordion-heading'>
          <span
            onClick={() => setState(!state)}
            id='heading2'
            class={
              state
                ? 'card-header collapsed card-title'
                : 'card-header  card-title'
            }
            data-toggle='collapse'
          >
            {questionTitle}
          </span>
        </div>
      </div>
      <div
        id='question_2 '
        class={state ? 'collapse ' : 'collapse  show'}
        aria-labelledby='heading2'
        data-parent='#accordion'
      >
        <div class='card-body card-bg'>
          <p class='m-0'>{questionAnswer}</p>
        </div>
      </div>
    </>
  )
}

export default SingleFaq
