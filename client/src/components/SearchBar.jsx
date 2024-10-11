import { SearchOutlined } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'

const SearchBarContainer = styled.div`
    border: 1px solid ${({theme})=>theme.text_secondary + 90};
    color: ${({theme})=>theme.text_primary};
`;

const SearchBar = () => {
  return (
    <SearchBarContainer className={`max-w-[550px] flex items-center w-[90%] rounded-[8px] p-[12px_16px] cursor-pointer gap-[6px] `}>
        <SearchOutlined />
        <input placeholder='Search image with prompt or name . . . ' className='border-none outline-none w-full text-inherit bg-transparent' />
    </SearchBarContainer>
  )
}

export default SearchBar