export interface ContributionEntry {
  taskId: string;
  prNumber: number;
  prTitle: string;
  prUrl: string;
  fileModule: string;
  status: 'Open' | 'Merged';
  whatChanged: string;
  technicalRationale: string;
  howToVerify: string;
}

export const contributionsHeader = {
  repositoryName: 'S-AI-Projects/geekcomputers-Python',
  repositoryUrl: 'https://github.com/S-AI-Projects/geekcomputers-Python',
  forkNotice: 'a fork of geekcomputers/Python',
  summary:
    '10 pull requests, Task IDs R25-T021 to R25-T030, opened from my fork namanlunia/geekcomputers-Python.',
};

export const contributionsData: ContributionEntry[] = [
  {
    taskId: 'R25-T030',
    prNumber: 84,
    prTitle: 'R25-T030: Strengthen the tests of ps (pscheck.py)',
    prUrl: 'https://github.com/S-AI-Projects/geekcomputers-Python/pull/84',
    fileModule: 'pscheck.py',
    status: 'Open',
    whatChanged:
      'Documented the contract, preconditions and failure boundary of ps() in pscheck.py by citing specific source lines, added minimal Python 2 and 3 compatibility imports without changing supported behaviour, and added a focused test suite (work/R25-T030/test_pscheck.py) with a check runner and recorded results.',
    technicalRationale:
      'A strong regression suite must catch plausible single-line bugs, such as reading the PID field where the owner is expected; a named assertion passes on real output and fails with a clear message when that index is swapped.',
    howToVerify: 'python3 work/R25-T030/check.py (5 tests pass)',
  },
  {
    taskId: 'R25-T029',
    prNumber: 83,
    prTitle: 'R25-T029: Measure the work done by equilibrium (Python-Array-Equilibrium-Index.py)',
    prUrl: 'https://github.com/S-AI-Projects/geekcomputers-Python/pull/83',
    fileModule: 'Python-Array-Equilibrium-Index.py',
    status: 'Open',
    whatChanged:
      'Documented the algorithmic complexity (O(N) time and O(1) space for input length N) in Python-Array-Equilibrium-Index.py, guarded module-level input execution behind if __name__ == "__main__":, and added benchmark tests (work/R25-T029/test_equilibrium.py) measuring empirical scaling across 5,000, 20,000, and 80,000 elements.',
    technicalRationale:
      'Measuring empirical scaling across multiple input sizes validates whether real-world execution reflects theoretical asymptotic predictions, while separating array generation from timed execution isolates pure algorithm overhead.',
    howToVerify: 'python3 work/R25-T029/check.py (4 tests pass)',
  },
  {
    taskId: 'R25-T028',
    prNumber: 82,
    prTitle: 'R25-T028: Cover the failure behavior of start (dice_rolling_simulator.py)',
    prUrl: 'https://github.com/S-AI-Projects/geekcomputers-Python/pull/82',
    fileModule: 'dice_rolling_simulator.py',
    status: 'Open',
    whatChanged:
      'Documented the contract and failure branches of start(), guarded the module-level call with if __name__ == "__main__" so tests can import it safely, and added regression tests (work/R25-T028/test_dice_simulator.py) for normal execution, the ValueError path on non-integer input, retry on unrecognised options, and recovery after a failure.',
    technicalRationale:
      'Failure paths must be handled predictably, and a valid call that succeeds right after an error proves the program state stays clean.',
    howToVerify: 'python3 work/R25-T028/check.py (4 tests pass)',
  },
  {
    taskId: 'R25-T027',
    prNumber: 81,
    prTitle:
      'R25-T027: Publish a runnable example for generate_unique_name (snake_case_renamer_depth_one.py)',
    prUrl: 'https://github.com/S-AI-Projects/geekcomputers-Python/pull/81',
    fileModule: 'snake_case_renamer_depth_one.py',
    status: 'Open',
    whatChanged:
      'Documented contract, preconditions, decisive state transition, and an executable worked example directly in the docstring of generate_unique_name in snake_case_renamer_depth_one.py. Created an automated test suite (work/R25-T027/test_renamer_example.py) executing doctest.testmod to trace filesystem collision transitions and verify smallest inputs.',
    technicalRationale:
      'Executable documentation ensures that code examples provided to developers remain verified and working across revisions, preventing documentation rot.',
    howToVerify: 'python3 work/R25-T027/check.py (5 tests pass)',
  },
  {
    taskId: 'R25-T026',
    prNumber: 80,
    prTitle: 'R25-T026: Simplify one responsibility in checkBinod (binod.py)',
    prUrl: 'https://github.com/S-AI-Projects/geekcomputers-Python/pull/80',
    fileModule: 'binod.py',
    status: 'Open',
    whatChanged:
      'Documented contract and preconditions for checkBinod in binod.py, refactored control flow by extracting inline substring matching into a named boolean variable has_binod = "binod" in fileContent.lower(), and added regression tests in work/R25-T026/test_binod.py covering empty files, keyword presence, and case-insensitivity boundaries.',
    technicalRationale:
      'Extracting inline compound expressions into intention-revealing variables improves code readability and maintainability while preserving functional equivalence.',
    howToVerify: 'python3 work/R25-T026/check.py (4 tests pass)',
  },
  {
    taskId: 'R25-T025',
    prNumber: 79,
    prTitle:
      'R25-T025: Make verification repeatable for verify_card_number (luhn_algorithm_for_credit_card_validation.py)',
    prUrl: 'https://github.com/S-AI-Projects/geekcomputers-Python/pull/79',
    fileModule: 'luhn_algorithm_for_credit_card_validation.py',
    status: 'Open',
    whatChanged:
      'Audited dependencies and documented pure-function characteristics of verify_card_number in luhn_algorithm_for_credit_card_validation.py, guarded main() behind if __name__ == "__main__":, and created regression tests in work/R25-T025/test_luhn.py verifying smallest valid and invalid inputs, ordinary numbers, and input isolation across repeated calls.',
    technicalRationale:
      'Pure functions must return identical outputs given identical inputs with zero side effects; input isolation tests ensure calls do not leak hidden state or residual mutations.',
    howToVerify: 'python3 work/R25-T025/check.py (6 tests pass)',
  },
  {
    taskId: 'R25-T024',
    prNumber: 78,
    prTitle: 'R25-T024: Test an invariant of power of two (power_of_two.py)',
    prUrl: 'https://github.com/S-AI-Projects/geekcomputers-Python/pull/78',
    fileModule: 'power_of_two.py',
    status: 'Open',
    whatChanged:
      'Documented the mathematical popcount invariant and preconditions directly in power_of_two.py, and built an invariant property test suite in work/R25-T024/test_power_of_two.py with seed 42 covering smallest input (1), ordinary inputs, 100 bounded property cases, and mutation verification.',
    technicalRationale:
      'Invariant testing verifies that fundamental mathematical properties hold true across arbitrary valid inputs within the domain, going beyond static hand-picked fixtures.',
    howToVerify: 'python3 work/R25-T024/check.py (4 tests pass)',
  },
  {
    taskId: 'R25-T023',
    prNumber: 77,
    prTitle: 'R25-T023: Cross-check date timeserver (date-timeserver.py)',
    prUrl: 'https://github.com/S-AI-Projects/geekcomputers-Python/pull/77',
    fileModule: 'date-timeserver.py',
    status: 'Open',
    whatChanged:
      'Documented contract and preconditions in date-timeserver.py, created an independent reference oracle using datetime.datetime decomposed fields without calling time.ctime, and added regression tests in work/R25-T023/test_date_timeserver.py testing socket lifecycle and 25 domain inputs against the oracle using mocked networking.',
    technicalRationale:
      'An independent oracle calculates expected values through a separate method to avoid circular reasoning where implementation bugs could be mirrored in tests.',
    howToVerify: 'python3 work/R25-T023/check.py (4 tests pass)',
  },
  {
    taskId: 'R25-T022',
    prNumber: 76,
    prTitle:
      'R25-T022: Define the supported boundaries of vowel_remover (vowel remover function.py)',
    prUrl: 'https://github.com/S-AI-Projects/geekcomputers-Python/pull/76',
    fileModule: 'vowel remover function.py',
    status: 'Open',
    whatChanged:
      'Documented supported domain and boundary behavior in vowel remover function.py without adding artificial type guards, and created boundary regression tests in work/R25-T022/test_vowel_remover.py covering valid interior, empty strings, all vowels, zero vowels, single consonant/vowel, and numbers/symbols.',
    technicalRationale:
      'Boundary value analysis identifies how a function behaves at extremes of its input domain, verifying edge cases while preserving existing behavior.',
    howToVerify: 'python3 work/R25-T022/check.py (8 tests pass)',
  },
  {
    taskId: 'R25-T021',
    prNumber: 75,
    prTitle: 'R25-T021: Lock down the contract of merge (merge.py)',
    prUrl: 'https://github.com/S-AI-Projects/geekcomputers-Python/pull/75',
    fileModule: 'merge.py',
    status: 'Open',
    whatChanged:
      'Documented a concise input/output contract beside merge in merge.py, and created a regression test suite in work/R25-T021/test_merge.py covering smallest valid input (0 and 1 CSV files), ordinary input (2 CSV files), and repeated-value boundary cases with external filesystem I/O mocked.',
    technicalRationale:
      'A software contract specifies preconditions, inputs, return types, and side effects so callers and maintainers understand guaranteed behaviors and avoid regressions.',
    howToVerify: 'python3 work/R25-T021/check.py (5 tests pass)',
  },
];
