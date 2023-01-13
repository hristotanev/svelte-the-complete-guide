<script lang="ts">
  import { v4 as uuidv4 } from 'uuid';

  import { validatePassword } from "./lib/validation";

  interface PasswordEntry {
    id: string;
    password: string;
  }

  let password: string = '';
  let passwords: PasswordEntry[] = [];
  let errorMessage: string = '';

  const addPassword = () => {
    const [isValid, message] = validatePassword(password);
    if (!isValid) {
      errorMessage = message;
      password = '';
      return;
    }

    passwords = [...passwords, { id: uuidv4(), password }];
    errorMessage = '';
    password = '';
  };

  function deletePassword(event: any) {
    passwords = passwords
      .filter(pswd => pswd.id != event.target.id);
  }
</script>

<main>
  <input bind:value={password} placeholder="Enter a password" />
  <button disabled={password.length == 0} on:click={addPassword}>Add</button>

  {#if errorMessage.length > 0}
    <p>{errorMessage}</p>
  {/if}

  {#if passwords.length > 0}
    <p>Passwords:</p>
  {:else}
    <p>No passwords to display.</p>
  {/if}
  <ul>
    {#each passwords as { id, password } (id) }
      <li {id} on:click={deletePassword}>{password}</li>
    {/each}
  </ul>
</main>
