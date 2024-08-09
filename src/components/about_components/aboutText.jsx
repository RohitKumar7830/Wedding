export const AboutText = () => {
  return (
    <div className='h-full w-full flex flex-col items-center justify-center px-[10%] py-4 gap-y-10 mt-[12%]'>
      <div>
        <div className="text-3xl feature:text-6xl mb-4">
          What’s a Rich Text element?
        </div>
        <div>
          The rich text element allows you to create and format headings, paragraphs, blockquotes, images, and video all in one place instead of having to add and format them individually. Just double-click and easily create content.
        </div>
      </div>
      <div>
        <div className="text-xl feature:text-4xl mb-4">
          Static and dynamic content editing
        </div>
        <div>
          A rich text element can be used with static or dynamic content. For static content, just drop it into any page and begin editing. For dynamic content, add a rich text field to any collection and then connect a rich text element to that field in the settings panel. Voila!
        </div>
      </div>
      <div>
        <div className="text-xl feature:text-4xl mb-4">
          How to customize formatting for each rich text
        </div>
        <div>
          Headings, paragraphs, blockquotes, figures, images, and figure captions can all be styled after a class is added to the rich text element using the &quot When inside of quot nested selector system.
        </div>
      </div>
    </div>
  )
}