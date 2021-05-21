# cms-options
Design prototypes for Child Maintenance Service 'Options' service, AKA: Get help arranging child maintenance.


# Hierarchy
  Maintain good folder hierarchy to ensure future iterations are easily navigable. As follows:
    >app
      >views
        >prototype(number)
          >iteration(number)

  Dynamic text for an iteration is stored under >app >view >prototype(number) >iteration(number) >includes

  All prototypes with more than a single iteration should have an index under >app >view >prototype(number)


# Routing
  Separate routes files are maintained for each iteration for the prototype.
    - Add new routes files to app/routes/prototype(number)iteration(number).
    - Update the master routes file at app/routes.js with the const name, filepath and router use (see the file, it's pretty self-explanatory).


# Versioning
  For each new iteration complete the following steps:
    1. It is recommended this is done under a branch in case of a breaking change.
    2. Create new prototype / iteration in folder structure as described under # Hierarchy
    3. Create new routes file as described under # Routing
    4. Update master routes file as described under # Routing
    5. Update >views > index.html with:
      - a new or amended accordion_section, if appropriate
      - an updated 'Latest version' link
    6. An new or amended version index file as described under # Hierarchy


# Merging
  I recommended (although it's not enforced) that work is undertaken in feature branches with regular commits rather than direct commits to Master.
