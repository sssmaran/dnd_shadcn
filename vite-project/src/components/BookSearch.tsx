import React, { useState } from "react";
import axios from "axios";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const BookSearch = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  type SearchResult = {
    docs: any[];
    numFound: number;
  };

  const searchBooks = async () => {
    if (!query) return;
    setIsLoading(true);
    try {
      const response = await axios.get<SearchResult>(
        `https://openlibrary.org/search.json?q=${query}`
      );
      console.log(response.data);
      setResults(response.data.docs);
    } catch (error) {
      console.log("Error fetching openAPI library", error);
    }
    setIsLoading(false);
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      searchBooks();
    }
  };

  return (
    <div className="p-4">
      <div className="sm:max-w-xs">
        <Input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for your next book!"
          onKeyUp={handleKeyPress}
        />
      </div>
      <Button onClick={() => searchBooks()}>
        {isLoading ? "Searching..." : "Search"}
      </Button>
      <div className="mt-4 max-h-64 overflow-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="p-2">Title</TableHead>
              <TableHead className="p-2">Author</TableHead>
              <TableHead className="p-2">Year</TableHead>
              <TableHead className="p-2">Page Count</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {results.map((book, index) => (
              <TableRow key={index}>
                <TableCell>{book.title}</TableCell>
                <TableCell>{book.author_name}</TableCell>
                <TableCell>{book.first_publish_year}</TableCell>
                <TableCell>{book.numbers_of_pages_median || "-"}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default BookSearch;
