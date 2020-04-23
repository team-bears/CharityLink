## Rename Project.

BROMROS ?

## CLASS / TYPES

| Type | Subtype              | Description                      |
| ---- | -------------------- | -------------------------------- |
| ACC  |                      | Account                          |
| ACC  | UC (Account Charity) |                                  |
| ACC  | UA (Account User)    |                                  |
|      |                      |                                  |
| DMY  |                      | (Date / Month / Year)            |
| STR  |                      | (String)                         |
| ID   |                      | (String ? => Autogen by MongoDB) |
| TRNS |                      | (Transactions)                   |
| PIC  |                      | (Pictures)                       |
|      |                      |                                  |
| POST |                      | (a post in a feed)               |
| POST | Pictures             |                                  |
| POST | Plain Text           |                                  |
| POST | Videos               | (LATER)                          |
| POST | Likes                |                                  |
| POST | Comments             |                                  |
| POST | Shares               |                                  |
| POST | TimeStamp            |                                  |
| POST | Creator              |                                  |
|      |                      |                                  |
| FD   | POST                 | (FEED) -> POST(s)                |

## Account (Superclass)

| N   | TYPE | SUBTYPE | NAME                               |
| --- | ---- | ------- | ---------------------------------- |
| 0.  | ID   |         | (AUTOGEN)                          |
| 1.  | STR  |         | Name                               |
| 2.  | DMY  |         | Creation Date                      |
| 3.  | L[]  | ACC     | Followers List                     |
| 4.  | L[]  | ACC     | Follows List                       |
| 5.  | L[]  | TRSN ID | Transacts                          |
| 6.  | PIC  | PROFILE | Profile Picture                    |
| 7.  | L[]  | FD      | Feed contains posts ...            |
| 8.  | STR  | Email   | Email.                             |
| 9.  | L[]  | POST(s) | List of posts made by this account |

## Charity Account (Super -> Account)

| N   | TYPE | SUBTYPE | NAME                               |
| --- | ---- | ------- | ---------------------------------- |
| 1.  | L[]  | UA      | Managers                           |
| 2.  | STR  | PHONE   | Phone Number                       |
|     | ID   |         | (AUTOGEN)                          |
|     | STR  |         | Name                               |
|     | DMY  |         | Creation Date                      |
|     | L[]  | ACC     | Followers List                     |
|     | L[]  | ACC     | Follows List                       |
|     | L[]  | TRSN ID | Transacts                          |
|     | PIC  | PROFILE | Profile Picture                    |
|     | L[]  | FD      | Feed contains posts ...            |
|     | STR  | Email   | Email.                             |
|     | L[]  | POST(s) | List of posts made by this account |

## User Account (Super -> Account)

| N   | TYPE | SUBTYPE | NAME                               |
| --- | ---- | ------- | ---------------------------------- |
| 1.  | STR  | GENDER  | (Can be null)                      |
| 2.  | DMY  | DOB     | Date of Birth                      |
| 3.  | STR  | FNAME   | First Name                         |
| 4.  | STR  | LNAME   | Last Name                          |
|     | ID   |         | (AUTOGEN)                          |
|     | DMY  |         | Creation Date                      |
|     | L[]  | ACC     | Followers List                     |
|     | L[]  | ACC     | Follows List                       |
|     | L[]  | TRSN ID | Transacts                          |
|     | PIC  | PROFILE | Profile Picture                    |
|     | L[]  | FD      | Feed contains posts ...            |
|     | STR  | Email   | Email.                             |
|     | L[]  | POST(s) | List of posts made by this account |
