callback({
  "levelNumber": 28,
  "size": 29,
  "steps": 117,
  "successRatio": 1,
  "type": "obsolete",
  "legal": false,
  "worky": true,
  "author": "Eirik0",
  "hash": "b3031c7bd7d1b54b1b04f84465985621",
  "path": "28-Three-Sort-34.78/29.117.obsolete-Eirik0.asm",
  "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 28-Three-Sort - SIZE 29/34 - SPEED 117/78 --\n\n-- This solution is superseded by 28.115-eiTTio.asm being functionally same with\n-- further optimization.\n\n-- This solution compares positions 1 with 2 and then 0 with 1, swapping\n-- them if they are out of order. If 0 and 1 are swapped, we start again.\n\na:\n    INBOX\n    COPYTO   0\n    INBOX\n    COPYTO   2\n    INBOX\nb:\n    COPYTO   1\n    SUB      2\n    JUMPN    c\n    COPYTO   3\n    COPYFROM 2\n    COPYTO   1\n    ADD      3\n    COPYTO   2\nc:\n    COPYFROM 0\n    SUB      1\n    JUMPN    d\n    JUMPZ    e\n    COPYTO   3\n    COPYFROM 1\n    COPYTO   0\n    ADD      3\n    JUMP     b\nd:\ne:\n    COPYFROM 0\n    OUTBOX\n    COPYFROM 1\n    OUTBOX\n    COPYFROM 2\n    OUTBOX\n    JUMP     a\n"
});