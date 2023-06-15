import React from 'react';

export default function Contact() {
  return (
    <div>
      <h1 className='text-2xl font-semibold'>Contact Form</h1>
      <div className="form-control w-full max-w-xs name-input">
        <label className="label">
          <span className="label-text">What is your name?</span>
        </label>
        <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
      </div>

      <div className="form-control w-full max-w-xs email-input">
        <label className="label">
          <span className="label-text">What is your email?</span>
        </label>
        <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
      </div>

      <div className="form-control w-full max-w-xs message-input">
        <label className="label">
          <span className="label-text">What is your message?</span>
        </label>
        <textarea placeholder="Type here" className="textarea textarea-primary textarea-lg w-full max-w-xs" ></textarea>
      </div>

        <button className="btn">
          Send 
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 35 35" stroke="currentColor" id="paper-plane"><path d="M23 31c-.311 0-.609-.146-.8-.4l-7.286-9.715a.998.998 0 0 1 .2-1.399.997.997 0 0 1 1.399.2l6.025 8.033L28.54 3.713 4.812 13.883l6.275 2.093a1 1 0 1 1-.633 1.897l-8.771-2.924a1 1 0 0 1-.078-1.867l28-12a1 1 0 0 1 1.363 1.161l-7 28A.998.998 0 0 1 23 31z"></path><path d="M11 30a1 1 0 0 1-1-.981l-.229-12.077a1 1 0 0 1 .486-.876l13.229-7.924a.999.999 0 0 1 1.319 1.45L16.56 20.821l-4.681 8.654A.998.998 0 0 1 11 30zm.781-12.516.146 7.699 2.906-5.374c.022-.04.047-.079.074-.116l5.35-7.286-8.476 5.077z"></path></svg>
        </button>

    </div>
  );
}
