'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styles from '../story/story.module.css';
import { lotOfWoodData } from './lotOfWoodData';

export default function LotOfWoodPage() {
    const [currentPageIndex, setCurrentPageIndex] = useState(0);

    const currentPage = lotOfWoodData[currentPageIndex];
    const isFirstPage = currentPageIndex === 0;
    const isLastPage = currentPageIndex === lotOfWoodData.length - 1;

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
                        const textLines = currentPage.text.split('\n');
                        const pinyinLines = currentPage.pinyin.split('\n');

                        return textLines.map((line, lineIndex) => {
                            const pinyinLine = pinyinLines[lineIndex] || '';
                            const chars = line.split('');
                            const pinyins = pinyinLine.trim().split(/\s+/);
                            // Simple logic to match pinyin to char, works well for 1:1 mapping in simple texts
                            // but ideally we should be robust against punctuation.
                            // However, the provided pinyin string includes punctuation matching the chars roughly.
                            // Let's rely on the simple splitting for now as per previous implementation.
                            let pinyinIndex = 0;

                            return (
                                <div key={lineIndex} className={styles.line}>
                                    {chars.map((char, charIndex) => {
                                        // Skip pinyin if it's a punctuation that might not have a separate pinyin entry in the split
                                        // But here we're splitting by space, and punctuation usually effectively attached or separate.
                                        // The previous implementation logic:
                                        const currentPinyin = pinyins[pinyinIndex] || '';
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

                    {currentPage.newChars && currentPage.newChars.length > 0 && (
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
                    第 {currentPage.id} 页 / 共 {lotOfWoodData.length} 页
                </div>
            </div>
        </div>
    );
}
