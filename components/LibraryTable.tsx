import { ExternalLinkIcon } from "@heroicons/react/outline";
import Link from "next/link";

/* This example requires Tailwind CSS v2.0+ */
export default function LibraryTable(props) {
  const documents = Array.from(props.docs);
  return (
    <div className="px-4 sm:px-9 lg:px-8">
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr className="divide-x divide-gray-200">
                    <th scope="col" className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                      Name
                    </th>
                    <th scope="col" className="px-4 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Description
                    </th>
                    <th scope="col" className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pr-6">
                      Link
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {documents.map((document: any) => (
                    <tr key={document.name} className="divide-x divide-gray-200">
                      <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-6">
                        {document.name}
                      </td>
                      <td className="whitespace-nowrap p-4 text-sm text-gray-500">{document.description}</td>
                      <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-blue-500 hover:cursor-pointer sm:pr-6"><Link href={document.href}><ExternalLinkIcon className="w-5 h-5"/></Link></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

