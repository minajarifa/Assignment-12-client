/* eslint-disable react/prop-types */
import { categories } from '../Categories/CategoriesData'
import { DateRange } from 'react-date-range'
import { TbFidgetSpinner } from 'react-icons/tb'
const AddRoomForm = ({
  dates,
  handleDates,
  handleSubmit,
  // setImagePreview,
  imagePreview,
  imageText,
  handleImage,
  loading,
}) => {
  return (
    <div className='w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50'>
      <form onSubmit={handleSubmit}>
        <div className='grid grid-cols-1 gap-10 lg:grid-cols-2'>
          <div className='space-y-6'>
            <div className='space-y-1 text-sm'>
              <label htmlFor='location' className='block text-gray-600'>
                Location
              </label>
              <input
                className='w-full px-4 py-3 text-gray-800 border rounded-md border-rose-300 focus:outline-rose-500 '
                name='location'
                id='location'
                type='text'
                placeholder='Location'
                required
              />
            </div>

            <div className='space-y-1 text-sm'>
              <label htmlFor='category' className='block text-gray-600'>
                Category
              </label>
              <select
                required
                className='w-full px-4 py-3 rounded-md border-rose-300 focus:outline-rose-500'
                name='category'
              >
                {categories.map(category => (
                  <option value={category.label} key={category.label}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>

            <div className='space-y-1'>
              <label htmlFor='location' className='block text-gray-600'>
                Select Availability Range
              </label>
              {/* Calender */}
              <DateRange
                rangeColors={['#F43F5E']}
                editableDateInputs={true}
                onChange={item => handleDates(item)}
                moveRangeOnFirstSelection={false}
                ranges={[dates]}
              />
            </div>
          </div>
          <div className='space-y-6'>
            <div className='space-y-1 text-sm'>
              <label htmlFor='title' className='block text-gray-600'>
                Title
              </label>
              <input
                className='w-full px-4 py-3 text-gray-800 border rounded-md border-rose-300 focus:outline-rose-500 '
                name='title'
                id='title'
                type='text'
                placeholder='Title'
                required
              />
            </div>

            <div className='flex items-center justify-between w-full p-4 m-auto bg-white rounded-lg '>
              <div className='relative px-5 py-3 border-4 border-gray-300 border-dotted rounded-lg file_upload'>
                <div className='flex flex-col mx-auto text-center w-max'>
                  <label>
                    <input
                      className='hidden text-sm cursor-pointer w-36'
                      type='file'
                      onChange={e => handleImage(e.target.files[0])}
                      name='image'
                      id='image'
                      accept='image/*'
                      hidden
                    />
                    <div className='p-1 px-3 font-semibold text-white border border-gray-300 rounded cursor-pointer bg-rose-500 hover:bg-rose-500'>
                      {/* {imageText} */}
                      {imageText.length > 20
                        ? imageText.split('.')[0].slice(0, 15) +
                        '....' +
                        imageText.split('.')[1]
                        : imageText}
                    </div>
                  </label>
                </div>
              </div>
              <div className='flex items-center object-cover w-16 h-16 overflow-hidden'>
                {imagePreview && <img src={imagePreview} />}
              </div>
            </div>
            <div className='flex justify-between gap-2'>
              <div className='space-y-1 text-sm'>
                <label htmlFor='price' className='block text-gray-600'>
                  Price
                </label>
                <input
                  className='w-full px-4 py-3 text-gray-800 border rounded-md border-rose-300 focus:outline-rose-500 '
                  name='price'
                  id='price'
                  type='number'
                  placeholder='Price'
                  required
                />
              </div>

              <div className='space-y-1 text-sm'>
                <label htmlFor='guest' className='block text-gray-600'>
                  Total guest
                </label>
                <input
                  className='w-full px-4 py-3 text-gray-800 border rounded-md border-rose-300 focus:outline-rose-500 '
                  name='total_guest'
                  id='guest'
                  type='number'
                  placeholder='Total guest'
                  required
                />
              </div>
            </div>

            <div className='flex justify-between gap-2'>
              <div className='space-y-1 text-sm'>
                <label htmlFor='bedrooms' className='block text-gray-600'>
                  Bedrooms
                </label>
                <input
                  className='w-full px-4 py-3 text-gray-800 border rounded-md border-rose-300 focus:outline-rose-500 '
                  name='bedrooms'
                  id='bedrooms'
                  type='number'
                  placeholder='Bedrooms'
                  required
                />
              </div>

              <div className='space-y-1 text-sm'>
                <label htmlFor='bathrooms' className='block text-gray-600'>
                  Bathrooms
                </label>
                <input
                  className='w-full px-4 py-3 text-gray-800 border rounded-md border-rose-300 focus:outline-rose-500 '
                  name='bathrooms'
                  id='bathrooms'
                  type='number'
                  placeholder='Bathrooms'
                  required
                />
              </div>
            </div>

            <div className='space-y-1 text-sm'>
              <label htmlFor='description' className='block text-gray-600'>
                Description
              </label>

              <textarea
                id='description'
                className='block w-full h-32 px-4 py-3 text-gray-800 border rounded-md focus:rose-300 border-rose-300 focus:outline-rose-500 '
                name='description'
              ></textarea>
            </div>
          </div>
        </div>

        <button
          disabled={loading}
          type='submit'
          className='w-full p-3 mt-5 font-medium text-center text-white transition duration-200 rounded shadow-md bg-rose-500'
        >
          {loading ? (
            <TbFidgetSpinner className='m-auto animate-spin' />
          ) : (
            ' Save & Continue'
          )}
        </button>
      </form>
    </div>
  )
}

export default AddRoomForm
