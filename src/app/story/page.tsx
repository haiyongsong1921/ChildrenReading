'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './story.module.css';
import { storyData } from './storyData';

export default function StoryPage() {
    const [currentPageIndex, setCurrentPageIndex] = useState(0);

    const currentPage = storyData[currentPageIndex];
    const isFirstPage = currentPageIndex === 0;
    const isLastPage = currentPageIndex === storyData.length - 1;

    const handleNext = () => {
        if (!isLastPage) {
            setCurrentPageIndex(prev => prev + 1);
        }
    };

    const handlePrev = () => {
        if (!isFirstPage) {
            setCurrentPageIndex(prev => prev - 1);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.bookPage}>
                <div className={styles.imageContainer}>
                    <Image
                        src={currentPage.image}
                        alt={`Illustration for page ${currentPage.id}`}
                        width={800}
                        height={500}
                        className={styles.storyImage}
                        priority
                    />
                </div>

                <div className={styles.textContent}>
                    {(() => {
                        // Split text and pinyin into lines first
                        const textLines = currentPage.text.split('\n');
                        const pinyinLines = currentPage.pinyin.split('\n');

                        return textLines.map((line, lineIndex) => {
                            const pinyinLine = pinyinLines[lineIndex] || '';
                            // Split line into characters
                            const chars = line.split('');
                            // Split pinyin line by spaces, filtering out empty strings if any
                            const pinyins = pinyinLine.trim().split(/\s+/);

                            let pinyinIndex = 0;

                            return (
                                <div key={lineIndex} className={styles.line}>
                                    {chars.map((char, charIndex) => {
                                        // Simple heuristic: if it's a punctuation that usually doesn't have pinyin, handle it.
                                        // However, the provided data seems to have pinyin (or placeholder) for punctuation in some cases, 
                                        // or we need to align carefully.
                                        // Looking at the data: "jīn tiān ， xiǎo..." vs "今天，小..."
                                        // It seems punctuation IS in the pinyin string as a separate token.

                                        const currentPinyin = pinyins[pinyinIndex] || '';

                                        // Advance pinyin index
                                        pinyinIndex++;

                                        return (
                                            <div key={charIndex} className={styles.charGroup}>
                                                <div className={styles.pinyinText}>{currentPinyin}</div>
                                                <div className={styles.charText}>{char}</div>
                                            </div>
                                        );
                                    })}
                                </div>
                            );
                        });
                    })()}

                    {currentPage.newChars.length > 0 && (
                        <div className={styles.newChars}>
                            <span className={styles.newCharsTitle}>新字 (New Characters):</span>
                            {currentPage.newChars.join('、')}
                        </div>
                    )}
                </div>

                <div className={styles.controls}>
                    <button
                        className={styles.button}
                        onClick={handlePrev}
                        disabled={isFirstPage}
                    >
                        上一页 (Previous)
                    </button>
                    <button
                        className={styles.button}
                        onClick={handleNext}
                        disabled={isLastPage}
                    >
                        下一页 (Next)
                    </button>
                </div>

                <div className={styles.pageNumber}>
                    第 {currentPage.id} 页 / 共 {storyData.length} 页
                </div>
            </div>
        </div>
    );
}
