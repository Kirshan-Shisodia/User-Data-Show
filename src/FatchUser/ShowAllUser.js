import React, { useEffect, useState } from 'react';
import './ShowAllUser.css'
import axios from 'axios';
import { Link } from 'react-router-dom';
// import Pagination from './Components/Pagination';
import ReactPaginate from 'react-paginate';


function ShowAllUser() {
    const [postsPerPage] = useState(10);
    const [users, setUsers] = useState([]);
    const [searchData, setSearchData] = useState('');
    const [searchApiData, setSearchApiData] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
   

    useEffect(() => {
        const fatchUser = async () => {

            const res = await axios.get('https://datapeace-storage.s3-us-west-2.amazonaws.com/dummy_data/users.json');
            const userData = res.data;
            const begin = (currentPage - 1) * postsPerPage;
            const end = begin + postsPerPage;
            const arr = userData.slice(begin, end)
            setUsers(arr);
            setSearchApiData(arr);
            setPageCount(Math.ceil(userData.length / postsPerPage))
    
        }
        fatchUser()
    }, [currentPage,postsPerPage])



    const onSearchChange = (e) => {
        if (e.target.value === '') {
            setUsers(searchApiData)
        } else {
            const filerData = searchApiData.filter(item => item.first_name.toLowerCase().includes(e.target.value.toLowerCase()));
            setUsers(filerData);
        }
        setSearchData(e.target.value)
        console.log(searchData);
    }

    const handlePageClick = (data) => {
        const selectedPages = data.selected;
        setCurrentPage(selectedPages + 1)
    }

    return (
        <div className='main-container'>
            <h1>Users</h1>

            <div className='inputfiled'>
                <input type="text" placeholder='Serch...' onInput={(e) => onSearchChange(e)} value={searchData} />
            </div>


            <table className='table' >
                <thead>
                    <tr>
                        <th scope='col'>First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Age</th>
                        <th scope="col">Email</th>
                        <th scope="col">Website</th>
                    </tr>
                </thead>


                {users.map((user) => {
                    return (
                        <tbody>
                            <tr key={user.id}>
                            <td><Link to='/userdetails' style={{ textDecoration: 'none' ,color:"black"}}  state={{user}} >
                                {user.first_name}
                            </Link></td>
                            <td>{user.last_name}</td>
                            <td>{user.age}</td>
                            <td>{user.email}</td>
                            <td>{user.web}</td>
                        </tr>
                        </tbody>
                    )
                })}
            </table>
            <div>
                <ReactPaginate
                    previousLabel={'previous'}
                    nextLabel={'next'}
                    breakLabel={'...'}
                    pageCount={pageCount}
                    marginPagesDisplayed={3}
                    pageRangeDisplayed={3}
                    onPageChange={handlePageClick}
                    containerClassName={'pagination justify-content-end'}
                    pageClassName={'page-item'}
                    pageLinkClassName={'page-link'}
                    previousClassName={'page-item'}
                    previousLinkClassName={'page-link'}
                    nextClassName={'page-item'}
                    nextLinkClassName={'page-link'}
                    breakClassName={'page-item'}
                    breakLinkClassName={'page-link'}
                    activeClassName={'active'}
                />
            </div>
        </div>
    );
}

export default ShowAllUser;