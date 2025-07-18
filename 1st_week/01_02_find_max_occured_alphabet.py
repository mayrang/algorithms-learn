def find_max_occurred_alphabet(string):
    alphabet_occurrence_array = [0] * 26
    for char in string:
        if char.isalpha():
            index = ord(char) - ord("a")
            alphabet_occurrence_array[index] += 1


    max_occurrence_index = 0
    for occurrence in range(0, len(alphabet_occurrence_array)):
        if alphabet_occurrence_array[occurrence] > alphabet_occurrence_array[max_occurrence_index]:
            max_occurrence_index = occurrence
    return chr(max_occurrence_index + 97)


result = find_max_occurred_alphabet
print("정답 = i 현재 풀이 값 =", result("hello my name is dingcodingco"))
print("정답 = e 현재 풀이 값 =", result("we love algorithm"))
print("정답 = b 현재 풀이 값 =", result("best of best youtube"))