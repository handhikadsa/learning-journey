import './App.css';
import { useEffect, useState } from 'react';
import {
  Card,
  Input,
  Button,
  Typography,
  List,
  ListItem,
  ListItemSuffix,
  IconButton
} from "@material-tailwind/react";
import { useForm } from "react-hook-form";

function App() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [books, setBooks] = useState([])

  const onSubmit = async (data) => {
    try {
      const response = await fetch('/api/books', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        const newBook = await response.json();
        setBooks([...books, newBook]); // Update UI
        reset(); // Clear the inputs
      }
    } catch (error) {
      console.error("Failed to add book", error);
    }
  };

  const onDelete = async (id) => {
    // Optional: Confirm with user first
    if (!window.confirm("Are you sure you want to delete this book?")) return;

    try {
      // Call the API with the specific ID
      const response = await fetch(`/api/books/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        // 2. Update Local State
        // "Keep only the books where the ID is NOT the one we just deleted"
        setBooks((prevBooks) => prevBooks.filter(book => book.id !== id));
      }
    } catch (error) {
      console.error("Failed to delete book", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/books');

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setBooks(data);
      } catch (error) {
        console.error("Failed to fetch dashboard data:", error);
      }
    }
    fetchData()
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Card className="w-full max-w-xl p-6 shadow-lg h-fit">

          <Typography variant="h4" color="blue-gray" className="mb-6">
            Library Manager
          </Typography>

          {/* 3. The Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
            <div>
              <Input
                label="Book Title"
                // Spread the 'register' function to connect this input
                {...register("title", { required: true })}
                error={errors.title ? true : false}
              />
              {errors.title && <span className="text-red-500 text-xs">Title is required</span>}
            </div>

            <div>
              <Input
                label="Author"
                {...register("author", { required: true })}
                error={errors.author ? true : false}
              />
              {errors.author && <span className="text-red-500 text-xs">Author is required</span>}
            </div>

            <Button type="submit" color="black" ripple={true}>
              Add Book
            </Button>
          </form>

          <hr className="my-6 border-blue-gray-50" />

          <Typography variant="h6" color="blue-gray" className="mb-2">
            Current Books
          </Typography>

          {/* 4. The List */}
          <List className="h-[300px] overflow-auto">
            {
              books.length > 0 ?
                <>
                  {books.map((book) => (
                    <ListItem key={book.id} className="border border-gray-200 mb-2 rounded-lg">
                      <div>
                        <Typography variant="h6" color="blue-gray">
                          {book.title}
                        </Typography>
                        <Typography variant="small" color="gray" className="font-normal">
                          by {book.author}
                        </Typography>
                      </div>

                      {/* Placeholder for Delete Button */}
                      <ListItemSuffix>
                        <IconButton 
                          variant="text" 
                          color="red"
                          onClick={() => onDelete(book.id)}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                          </svg>
                        </IconButton>
                      </ListItemSuffix>
                    </ListItem>
                  ))}
                </>
                :
                <div className="text-black text-lg font-bold">
                  No book listed.
                </div>
            }
          </List>
        </Card>
      </header>
    </div>
  );
}

export default App;
