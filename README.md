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
| UID  |                      | Username (chosen by user/charity)|
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
| 0.  | UID  |         | Username                           |
| 1.  | DMY  |         | Creation Date                      |
| 2.  | L[]  | ACC     | Followers List                     |
| 3.  | L[]  | ACC     | Follows List                       |
| 4.  | L[]  | TRSN ID | Transacts                          |
| 5.  | PIC  | PROFILE | Profile Picture                    |
| 6.  | L[]  | FD      | Feed contains posts ...            |
| 7.  | STR  | Email   | Email.                             |
| 8.  | L[]  | POST(s) | List of posts made by this account |
| 9.  | STR  |         | Name                               |

## Charity Account (Super -> Account)

| N   | TYPE | SUBTYPE | NAME                               |
| --- | ---- | ------- | ---------------------------------- |
| 1.  | L[]  | UA      | Managers                           |
| 2.  | STR  | PHONE   | Phone Number                       |
|     | STR  |         | Charity Name                       |
|     | UID  |         | CharityUsername                    |
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
|     | UID  |         | Username                           |
|     | DMY  |         | Creation Date                      |
|     | L[]  | ACC     | Followers List                     |
|     | L[]  | ACC     | Follows List                       |
|     | L[]  | TRSN ID | Transacts                          |
|     | PIC  | PROFILE | Profile Picture                    |
|     | L[]  | FD      | Feed contains posts ...            |
|     | STR  | Email   | Email.                             |
|     | L[]  | POST(s) | List of posts made by this account |
