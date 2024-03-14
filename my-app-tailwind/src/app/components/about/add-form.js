"use client";

import { useFormState, useFormStatus } from "react-dom";
import { createTodo } from "../../action/todo";

const initialState = {
  message: "",
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" className="rounded-lg btn btn-primary btn-block" disabled={pending}>Send Enquiry</button>
  );
}

export function AddForm() {
  const [state, formAction] = useFormState(createTodo, initialState);
  console.log({ state })
  return (
    <section className="bg-gray-2 rounded-xl max-w-screen-md mx-auto">
      <div className="p-8 shadow-lg">
        <form action={formAction} className="space-y-4">
          <div className="w-full">
            <label className="sr-only" htmlFor="name">Name</label>
            <input className="input input-solid max-w-full" placeholder="Name" type="text" id="name" name="name" />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="sr-only" htmlFor="email">Email</label>
              <input className="input input-solid" placeholder="Email address" type="email" id="email" name="email" />
            </div>

            <div>
              <label className="sr-only" htmlFor="phone">Phone</label>
              <input className="input input-solid" placeholder="Phone Number" type="tel" id="phone" name="phone" />
            </div>
          </div>

          <div className="w-full">
            <label className="sr-only" htmlFor="message">Message</label>

            <textarea className="textarea textarea-solid max-w-full" placeholder="Message" rows="8" id="message" name="message"></textarea>
          </div>

          <div className="mt-4">
            <SubmitButton />
          </div>
          <p  role="status">
            {state?.message}
          </p>
        </form>
      </div>
    </section>
  );
}