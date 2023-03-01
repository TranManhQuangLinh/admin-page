import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { Modal, Button } from 'react-bootstrap';
import Table from "./Table";


function PostManagement() {
    const [posts, setPosts] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedPost, setSelectedPost] = useState(null);
    const [filter, setFilter] = useState("");

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
                setPosts(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const columns = useMemo(() => [
        {
            Header: "Id",
            accessor: "id",
            id: 'id',
            Cell: props => (<div className="text-center">{props.value}</div>),

        },
        {
            Header: "User ID",
            accessor: "userId",
            id: 'userId',
            Cell: props => (<div className="text-center">{props.value}</div>),
        },
        {
            Header: "Title",
            accessor: "title",
            id: 'title',

        },
        {
            Header: "Action",
            accessor: "id",
            id: 'postid',
            Cell: (props) => (
                <button className="btn btn-primary" onClick={() => handleViewClick(props.value)}>View</button>
            ),
        },
    ], [posts]);

    const handleViewClick = (postId) => {
        const post = posts.find((p) => p.id === postId);
        setSelectedPost(post);
        setModalIsOpen(true);
    };

    const handleModalClose = () => {
        setModalIsOpen(false);
    };

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };



    const filteredPosts = posts.filter(
        (post) =>
            post.userId.toString().includes(filter) ||
            post.title.toLowerCase().includes(filter.toLowerCase())
    );




    return (
        <div>
            <div className="title">Post Management</div>
            <div className="content-data">
                <div className="">
                    <input className="filter form-control" type="text" value={filter} onChange={handleFilterChange} placeholder='Search id or title' />
                </div>

                <Table columns={columns} data={filteredPosts} />

                {selectedPost && (
                    <Modal show={modalIsOpen} onHide={handleModalClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>{selectedPost.title}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <p>User ID: {selectedPost.userId}</p>
                            <p>{selectedPost.body}</p>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleModalClose}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                )}

            </div>
        </div>
    );
};


export default PostManagement