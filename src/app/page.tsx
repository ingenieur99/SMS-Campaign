'use client';

import React, { useState } from 'react';
import { Sidebar } from '@/components/SideBar';
import { CampaignButton } from '@/components/CampaignButton';
import { IphonePreview } from '@/components/iphonePreview';
import { CampaignContent } from '@/components/campaignContent';
import { Filter } from '@/components/filter';
import { Header } from '@/components/Header';

export default function CampaignPage() {
  const [campaignContent, setCampaignContent] = useState(
    `L'amour est dans l'air ❤️ ! Offrez-lui une surprise inoubliable aujourd'hui.\nDécouvrez nos offres spéciales ici : http://b2bph.tn/xxxx`
  );
  const [sentMessage, setSentMessage] = useState('');

  const handleSend = () => {
    setSentMessage(campaignContent);
  };

  return (
    <div className="flex h-screen w-full bg-gray-50 rounded-xl">
      <Sidebar />

      <Filter />

      <div className="bg-gray-100 flex-1 flex flex-col max-w-screen-xl mx-auto p-2">
        <Header />

        <div className="w-full bg-white p-6 rounded-xl shadow space-y-4">
          <div className="flex justify-between items-center pb-4">
            <h1 className="text-2xl font-semibold">Create Campaign</h1>
          </div>
          <hr className="border-b border-gray-200" />

          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-1 p-4 rounded-xl space-y-4 max-w-3xl">
              <div className="flex justify-between items-center pb-4">
                <h2 className="text-xl font-semibold flex items-center gap-3">
                  Seasonal Shoppers
                  <img src="/ic-outline-edit-2.png" alt="Edit Icon" />
                  <div className="flex items-center gap-1 bg-gray-100 text-sm px-2 py-1 rounded-full">
                    <img src="/Left.png" alt="Count Icon" />
                    <span className="font-medium text-gray-700">273</span>
                  </div>
                </h2>
              </div>
              <hr className="border-b border-gray-200" />

              <div className="mb-10">
                <h2 className="text-lg font-semibold pb-1 mb-1">Recipients</h2>
                <h3 className="text-sm text-gray-400 text-center pb-1 mb-1">Don't send to</h3>
                <div className="flex space-x-10">
                  <button className="px-9 py-1 rounded-full border border-gray-300 text-gray-300 text-sm hover:bg-gray-100 transition">
                    Select one or more options
                  </button>
                  <button className="px-9 py-1 rounded-full border border-gray-300 text-gray-300 text-sm hover:bg-gray-100 transition">
                    Select one or more options
                  </button>
                </div>
              </div>

              <CampaignContent
                value={campaignContent}
                onChange={(val) => setCampaignContent(val)}
              />

              <div className="space-y-6 mt-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-semibold">Tracking</h2>
                </div>

                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-semibold">Shorten all links with bzbp.tn</h2>
                  <input type="checkbox" className="toggle-checkbox-slider" />
                </div>

                <div>
                  <div className="flex justify-between items-center">
                    <h2 className="text-lg font-semibold">Include tracking parameters</h2>
                    <input type="checkbox" className="toggle-checkbox-slider" />
                  </div>
                  <p className="text-sm text-gray-500">
                    Links in this campaign will include additional tracking information called UTM parameters. This allows source tracking within third-party reporting tools such as Google Analytics.
                  </p>
                </div>

                <div>
                  <div className="flex justify-between items-center">
                    <h2 className="text-lg font-semibold">Customize tracking parameters</h2>
                  </div>
                  <p className="text-sm text-gray-500">
                    When enabled, this campaign will use the custom tracking parameters defined below and will completely <span className="underline">replace</span> the default parameters in your <span className="underline">Account setting</span>.
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between w-full pt-2">
                <div>
                  <CampaignButton text="Send a test message" variant="ghost" />
                </div>
                <div className="flex space-x-4">
                  <CampaignButton text="Schedule" variant="outline" icon="/Right.png" />
                  <CampaignButton text="Send" icon="/send-2.png" onClick={handleSend} />
                </div>
              </div>
            </div>

            <div className="flex justify-center items-start pt-4">
              <IphonePreview content={sentMessage} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
