import React from "react";
import { Book } from "./BookSearch";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";

const BookList = ({
  books,
  onMoveBook,
}: {
  books: Book[];
  onMoveBook: (book: Book, targetList: Book["status"]) => void;
}) => {
  const moveToList = (book: Book, targetList: Book["status"]) => {
    onMoveBook(book, targetList);
  };
  const renderBookItem = (book: Book, index: number) => (
    <Card key={index}>
      <CardHeader>
        <CardTitle>{book.title}</CardTitle>
        <CardDescription>{book.author_name}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <div className="inline-flex gap-2">
          <Button variant="outline" />
        </div>
      </CardFooter>
    </Card>
  );
  return (
    <div className="space-y-8 p-4">
      <h2 className="mb-4 text-2xl font-bold">My Reading List</h2>
      <div>{books.map((book, index) => renderBookItem(book, index))}</div>
    </div>
  );
};

export default BookList;
