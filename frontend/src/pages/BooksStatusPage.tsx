import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { getActiveCheckouts } from '../services/bookService';
import type { Checkout } from '../types/books';
import MainLayout from '../components/layout/MainLayout';

const BooksStatusPage: React.FC = () => {
  const { data, isLoading, isError } = useQuery<{ pendingCount: number; checkouts: Checkout[] }>(
    {
      queryKey: ['activeCheckouts'],
      queryFn: getActiveCheckouts,
      staleTime: 30 * 1000,
    }
  );

  const checkouts: Checkout[] = data?.checkouts || [];
  const pendingCount: number = data?.pendingCount ?? 0;

  return (
    <MainLayout>
      <div className="max-w-6xl mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-6"
      >
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Books Status</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Overview of pending returns and active borrowers</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="col-span-1 bg-gradient-to-br from-emerald-50 to-white dark:from-gray-800 dark:to-gray-700 border border-gray-200 dark:border-gray-700 shadow-sm rounded-lg p-6"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-300">Pending Returns</p>
              <p className="text-4xl font-bold text-emerald-700 dark:text-emerald-300 mt-2">{isLoading ? '...' : pendingCount}</p>
            </div>
            <div className="p-3 bg-emerald-100 dark:bg-emerald-900 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-emerald-600 dark:text-emerald-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v4a1 1 0 001 1h3m10 0h3a1 1 0 001-1V7m-8 10v-6m0 0L9 9m3 2l3-2" />
              </svg>
            </div>
          </div>
          <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">Total number of books currently checked out and awaiting return.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="col-span-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm rounded-lg p-6"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">Active Borrowers</p>
          <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100 mt-1">Students with books to return</h2>

          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead>
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Student</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Registration</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Book</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Checked Out</th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-100 dark:divide-gray-700">
                {isLoading && (
                  <tr>
                    <td colSpan={4} className="px-4 py-6 text-center text-sm text-gray-500">Loading...</td>
                  </tr>
                )}

                {isError && (
                  <tr>
                    <td colSpan={4} className="px-4 py-6 text-center text-sm text-red-500">Failed to load data</td>
                  </tr>
                )}

                {!isLoading && !checkouts.length && (
                  <tr>
                    <td colSpan={4} className="px-4 py-6 text-center text-sm text-gray-500">No active checkouts</td>
                  </tr>
                )}

                {checkouts.map((c) => (
                  <tr key={c.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">{c.User?.name}</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{c.User?.registrationNumber || '-'}</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-200">{c.Book?.title}</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{new Date(c.checkedOutAt).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>

      </div>
    </MainLayout>
  );
};

export default BooksStatusPage;
