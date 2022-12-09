import { useState, useRef, useEffect, useContext } from 'react'
import axios from "axios";
import { useMutation } from 'react-query'
import { useNavigate } from "react-router-dom";
import NavbarAdmin from './NavbarAdmin'

export default function CreateWebinar() {

  const [title, setTitle] = useState("");
  const [file, setFile] = useState("");
  const [desc, setDesc] = useState("");
  const [preview, setPreview] = useState("");
  const navigate = useNavigate();

  const loadImage = (e) => {
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
  };

  const saveProduct = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("desc", desc)
    formData.append("title", title);
    try {
      await axios.post("http://localhost:5000/book", formData, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      });
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };


  return (<>
    <NavbarAdmin />
    <div className="col-span-12">
      <div className="md:grid md:grid-cols-12 md:gap-6">
        <div className="md:col-span-3">
          <div className="px-4 sm:px-0">
            <h3 className="text-lg font-medium leading-6 text-gray-900">General</h3>
            <p className="mt-2 text-sm text-gray-600">
              This is the most important part of
              this webinar. Make sure you don't leave typos and grammar mistakes!
            </p>
          </div>
        </div>
        <div className="mt-5 md:col-span-9 md:mt-0">
          <form action="#" method="POST" onSubmit={saveProduct}>
            <div className="border shadow sm:overflow-hidden sm:rounded-md">
              <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                <div className="grid grid-cols-3 gap-6">
                  <div className="col-span-3 sm:col-span-2">
                    <label
                      htmlFor="title"
                      className="block text-sm font-medium text-gray-700">
                      Title
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <input
                        type="text"
                        name="title"
                        id="title"
                        value={title}
                        className="block w-full flex-1 rounded-md border border-gray-300 py-2 px-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="Book"
                        onChange={(e) => setTitle(e.target.value)}
                      />
                    </div>
                  </div>
                </div>


                <div>
                  <label htmlFor="desc" className="block text-sm font-medium text-gray-700">
                    Description
                  </label>
                  <div className="mt-1">
                    <input
                      id="desc"
                      name="desc"
                      value={desc}
                      rows={3}
                      className="mt-1 block w-full rounded-md border border-gray-300 px-2 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      placeholder="Book..."
                      defaultValue={''}
                      onChange={(e) => setDesc(e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Cover Book</label>
                  <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                    <div className="space-y-1 text-center">
                      <svg
                        className="mx-auto h-12 w-12 text-gray-400"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true">
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className="flex text-sm text-gray-600">
                        <label
                          htmlFor="file"
                          className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500">
                          <p className='ml-8'>Upload a file</p>
                          <input
                            id="file"
                            name="file"
                            type="file"
                            className="sr-only"
                            onChange={loadImage}
                          />
                        </label>
                      </div>
                      <p className="text-xs text-gray-500">PNG, JPG, JPEG up to 5MB</p>
                    </div>
                  </div>
                </div>
                {preview ? (
                  <figure className="image is-128x128">
                    <img src={preview} alt="Preview Image" />
                  </figure>
                ) : (
                  ""
                )}

                {/*  */}
                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </>
  )
}
