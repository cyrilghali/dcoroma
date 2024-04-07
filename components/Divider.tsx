/* This example requires Tailwind CSS v2.0+ */
export default function Divider() {
  return (
    <div className="relative py-12">
      <div
        className="absolute inset-0 flex items-center justify-center"
        aria-hidden="true"
      >
        <div className="w-3/4 border-t border-gray-300" />
      </div>
      <div className="relative flex justify-center"></div>
    </div>
  )
}
