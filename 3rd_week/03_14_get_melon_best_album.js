function main() {
  console.log("정답 = [4, 1, 3, 0] / 현재 풀이 값 = ");
  console.log(getMelonBestAlbum(["classic", "pop", "classic", "classic", "pop"], [500, 600, 150, 800, 2500]));

  console.log("정답 = [0, 6, 5, 2, 4, 1] / 현재 풀이 값 = ");
  console.log(
    getMelonBestAlbum(
      ["hiphop", "classic", "pop", "classic", "classic", "pop", "hiphop"],
      [2000, 500, 600, 150, 800, 2500, 2000]
    )
  );
}

function getMelonBestAlbum(genreArray, playArray) {
  let n = genreArray.length;
  let genreTotalPlayDict = new Map();
  let genreIndexPlayArrayDict = new Map();

  for (let i = 0; i < n; i++) {
    let genre = genreArray[i]; // classic
    let play = playArray[i]; // 500

    if (genreTotalPlayDict.has(genre)) {
      //classic 이라는 키값이 있었으면
      genreTotalPlayDict.set(genre, genreTotalPlayDict.get(genre) + play); //재생횟수를 더해줘야 할테니까요
      genreIndexPlayArrayDict.get(genre).push([i, play]);
    } else {
      //키 값이 없는 상황이라면
      genreTotalPlayDict.set(genre, play); // 500
      genreIndexPlayArrayDict.set(genre, [[i, play]]);
    }
  }

  // 장르별로 가장 재생횟수가 많은 장르들 중, 곡수가 많은 순서대로 2개씩 출력하기.
  let sortedGenrePlayList = Array.from(genreTotalPlayDict.entries());
  sortedGenrePlayList.sort((a, b) => b[1] - a[1]);

  let result = [];
  for (let [genre, totalPlay] of sortedGenrePlayList) {
    let genreIndexPlayList = genreIndexPlayArrayDict.get(genre);

    // Sort by play count (descending), then by index (ascending) if play counts are equal
    genreIndexPlayList.sort((a, b) => {
      if (b[1] !== a[1]) {
        return b[1] - a[1]; // Sort by play count descending
      } else {
        return a[0] - b[0]; // Sort by index ascending
      }
    });

    let genreSongCount = 0;
    for (let indexPlay of genreIndexPlayList) {
      if (genreSongCount >= 2) {
        break;
      }

      result.push(indexPlay[0]);
      genreSongCount++;
    }
  }

  return result;
}

// Run the main function
main();
