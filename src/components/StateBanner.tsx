import React from 'react';

export type BannerData = {
  message: string;
  state: 'success' | 'error';
};

export default function StateBanner({
  banner: { message, state },
}: {
  banner: BannerData;
}) {
  const isSuccess = state === 'success';
  const icon = isSuccess ? '✅' : '❗';
  return (
    <p
      className={`p-2 text-center rounded-xl ${
        isSuccess ? 'bg-green-200' : 'bg-red-200'
      }`}
    >
      {`${icon} ${message}`}
    </p>
  );
}
