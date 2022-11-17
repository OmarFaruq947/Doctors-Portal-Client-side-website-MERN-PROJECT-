import React from "react";

const ContactForm = () => {
  return (
    <div className="bg-[url('/src/assets/images/appointment.png')] py-12">
      <div className="flex justify-center py-12 px-4">
        <div className="w-full max-w-md space-y-8">
          <div>
            <div className="text-center">
              <h6 className="text-primary text-[20px]">Contact us</h6>
              <p className="text-[36px] text-white">Stay connected with us</p>
            </div>
          </div>
          <form className="mt-8 space-y-6">
            <input type="hidden" name="remember" value="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <input
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  required
                  className="mt-8 relative block w-full appearance-none rounded-lg border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500  sm:text-sm"
                />
              </div>
              <div>
                <input
                  name="Subject"
                  type="text"
                  required
                  className="mt-8 relative block w-full appearance-none rounded-lg border border-gray-300 px-3 py-3 text-gray-900 placeholder-gray-500 sm:text-sm"
                  placeholder="Subject"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  type="text"
                  
                  required
                  className="mt-8 relative block w-full appearance-none rounded-lg border border-gray-300 px-3 py-8 text-gray-900 placeholder-gray-500 sm:text-sm"
                  placeholder="Message"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-primary py-2 px-4 text-sm font-medium text-white hover:bg-primary "
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
