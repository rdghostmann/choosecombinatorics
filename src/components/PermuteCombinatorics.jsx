"use client";

import React, { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";

export default function PermuteCombinatorics() {
  const [numbers, setNumbers] = useState(Array(45).fill(""));
  const [permuteN, setPermuteN] = useState(2);
  const [chooseN, setChooseN] = useState(2);
  const [permutedResult, setPermutedResult] = useState([]);
  const [combinatoricsOutput, setCombinatoricsOutput] = useState([]);
  const [analyticsData, setAnalyticsData] = useState([]);

  // Handle input change
  const handleInputChange = (index, value) => {
    if (/^\d*$/.test(value)) {
      const updatedNumbers = [...numbers];
      updatedNumbers[index] = value;
      setNumbers(updatedNumbers);
    }
  };

  // Generate permutations of given size
  const getPermutations = (arr, size) => {
    if (size === 1) return arr.map((item) => [item]);
    const permutations = [];
    arr.forEach((item, index) => {
      const remaining = arr.slice(0, index).concat(arr.slice(index + 1));
      getPermutations(remaining, size - 1).forEach((perm) =>
        permutations.push([item, ...perm])
      );
    });
    return permutations;
  };

  // Generate combinations of given size
  const getCombinations = (arr, size) => {
    if (size === 0) return [[]];
    if (arr.length === 0) return [];
    const [first, ...rest] = arr;
    const withFirst = getCombinations(rest, size - 1).map((comb) => [first, ...comb]);
    const withoutFirst = getCombinations(rest, size);
    return withFirst.concat(withoutFirst);
  };

  // Handle permutation button click
  const handlePermute = () => {
    const filteredNumbers = numbers.filter((num) => num !== "");
    const permutations = getPermutations(filteredNumbers, permuteN);
    setPermutedResult(permutations);
  };

  // Handle combinatorics calculation button click
  const handleCalculate = () => {
    const filteredNumbers = numbers.filter((num) => num !== "");
    const combinations = getCombinations(filteredNumbers, chooseN);
    setCombinatoricsOutput(combinations);
  };

  // Randomize the output rows
  const handleRandomize = () => {
    setCombinatoricsOutput((prev) => [...prev].sort(() => Math.random() - 0.5));
  };

  // Check results for specific pairs
  const handleResultCheck = () => {
    const analytics = {};
    const targetPairs = [['1', '2'], ['2', '3'], ['3', '4']]; // Example pairs

    combinatoricsOutput.forEach((row) => {
      for (let i = 0; i < row.length - 1; i++) {
        const currentNum = row[i];
        const nextNum = row[i + 1];
        targetPairs.forEach(([first, second]) => {
          if (currentNum === first && nextNum === second) {
            const pairKey = `${first} ${second}`;
            analytics[pairKey] = (analytics[pairKey] || 0) + 1;
          }
        });
      }
    });

    // Filter only valid pairs with more than one occurrence
    const filteredAnalytics = Object.entries(analytics).filter(
      ([, count]) => count > 1
    );
    setAnalyticsData(filteredAnalytics.length > 0 ? filteredAnalytics : [["No pairs found", 0]]);
  };

  return (
    <div className="container mx-auto p-4 space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Combinatorics and Permutation Tool</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Input Grid Table */}
          <Table className="mb-4">
            <TableBody>
              {Array.from({ length: 3 }).map((_, rowIndex) => (
                <TableRow key={rowIndex}>
                  {Array.from({ length: 15 }).map((_, colIndex) => {
                    const index = rowIndex * 15 + colIndex;
                    return (
                      <TableCell key={index}>
                        <Input
                        className="p-1"
                          type="number"
                          value={numbers[index]}
                          onChange={(e) => handleInputChange(index, e.target.value)}
                          placeholder={`${index + 1}`}
                        />
                      </TableCell>

                    );
                  })}
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <div className="flex flex-col items-center space-y-4">
            {/* Permutation Section */}
            <div className="flex items-center space-x-2">
              <Input
                type="number"
                min={2}
                max={7}
                value={permuteN}
                onChange={(e) => setPermuteN(parseInt(e.target.value))}
                className="p-1"
                />
              <Button onClick={handlePermute}>Permute {permuteN}</Button>
            </div>

            {/* Display Permuted Results */}
            {permutedResult.length > 0 && (
              <Table>
                <TableBody>
                  {permutedResult.map((row, rowIndex) => (
                    <TableRow key={rowIndex}>
                      {row.map((cell, cellIndex) => (
                        <TableCell key={cellIndex}>{cell}</TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}

            {/* Combinatorics Section */}
            <div className="flex items-center space-x-2">
              <Input
                type="number"
                min={2}
                max={7}
                value={chooseN}
                onChange={(e) => setChooseN(parseInt(e.target.value))}
                className="p-1"
                />
              <Button onClick={handleCalculate}>Calculate Choose {chooseN}</Button>
            </div>

            <Button onClick={handleRandomize}>Randomize</Button>

            {/* Display Combinatorics Results */}
            {combinatoricsOutput.length > 0 && (
              <Table>
                <TableBody>
                  {combinatoricsOutput.map((row, rowIndex) => (
                    <TableRow key={rowIndex}>
                      {row.map((cell, cellIndex) => (
                        <TableCell key={cellIndex}>{cell}</TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}

            <Button onClick={handleResultCheck}>Check Results</Button>

            {/* Analytics Data Display */}
            {analyticsData.length > 0 && (
              <div className="w-full">
                <h3 className="font-semibold mb-2">Analytics Data</h3>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Pair</TableHead>
                      <TableHead>Occurrences</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {analyticsData.map(([pair, count], index) => (
                      <TableRow key={index}>
                        <TableCell>{pair}</TableCell>
                        <TableCell>{count}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
