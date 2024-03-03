import React from "react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { useStore, Book } from "@/store";

const BookList = () => {
  const { books, removeBook, moveBook } = useStore((state) => state);

  const moveToList = (book: Book, targetList: Book["status"]) => {
    moveBook(book, targetList);
  };
  const renderBookItem = (book: Book, index: number, listType: string) => (
    <Card key={index} className="mb-2">
      <CardHeader>
        <CardTitle>{book.title}</CardTitle>
        <CardDescription>{book.author_name}</CardDescription>
      </CardHeader>
      <CardFooter className="flex justify-between">
        <Button variant="destructive" onClick={() => removeBook(book)}>
          Remove
        </Button>
        <div className="inline-flex gap-2">
          <Button
            variant="outline"
            onClick={() => moveToList(book, "inProgress")}
            disabled={listType === "inProgress"}
          >
            In Progress
          </Button>
          <Button
            variant="outline"
            onClick={() => moveToList(book, "backlog")}
            disabled={listType === "backlog"}
          >
            Backlog
          </Button>
          <Button
            variant="outline"
            onClick={() => moveToList(book, "done")}
            disabled={listType === "done"}
          >
            Done
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
  return (
    <div className="space-y-8 p-4">
      <h2 className="mb-4 text-2xl font-bold">My Reading List</h2>
      {books.filter((book) => book.status === "inProgress").length > 0 && (
        <>
          <h3 className="mb-2 text-xl-font-semibold">In Progress</h3>
          <div>
            {books
              .filter((book) => book.status === "inProgress")
              .map((book, index) => renderBookItem(book, index, "inProgress"))}
          </div>
        </>
      )}
      {books.filter((book) => book.status === "backlog").length > 0 && (
        <>
          <h3 className="mb-2 text-xl-font-semibold">backlog</h3>
          <div>
            {books
              .filter((book) => book.status === "backlog")
              .map((book, index) => renderBookItem(book, index, "backlog"))}
          </div>
        </>
      )}
      {books.filter((book) => book.status === "done").length > 0 && (
        <>
          <h3 className="mb-2 text-xl-font-semibold">done</h3>
          <div>
            {books
              .filter((book) => book.status === "done")
              .map((book, index) => renderBookItem(book, index, "done"))}
          </div>
        </>
      )}
    </div>
  );
};

export default BookList;
