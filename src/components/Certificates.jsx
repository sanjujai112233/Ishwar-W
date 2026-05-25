import React from 'react';

const Certificates = () => {
  return (
    <div className="pt-24 min-h-screen bg-brand-dark text-slate-50 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Certificates</h1>
      <div className="overflow-x-auto">
        <table className="w-full max-w-2xl mx-auto bg-gray-800 text-white rounded-lg shadow-lg">
          <thead className="bg-gray-700">
            <tr>
              <th className="px-4 py-2 text-center">Certificate</th>
              <th className="px-4 py-2 text-center">Download</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-gray-700 text-center">
              <td className="px-4 py-2 ">AEO Certificate</td>
              <td className="px-4 py-2 ">
                <a
                  href="/Documents/AEO.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-brand-blue text-white rounded hover:bg-brand-accent transition-colors"
                >
                  View PDF
                </a>
              </td>
            </tr>
            <tr className="border-t border-gray-700 text-center">
              <td className="px-4 py-2">GST ILPL Certificate</td>
              <td className="px-4 py-2">
                <a
                  href="/Documents/GSTILPL.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-brand-blue text-white rounded hover:bg-brand-accent transition-colors"
                >
                  View PDF
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Certificates;
