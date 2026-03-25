<?php

namespace Tests\Unit;

/* 
    To Add to the monster fight: 
    - Small model or tutioral explaining how the fight system works: 
        Like Attck <= defence = 0 dmg or Attack > defence = diff in damge. Same for magical attack and cost with MP
        Mabye explain what each buttons do too. Like attack intiatie a turn fight, taunt has a chance to stun for a turn etc.
        Explain how the enemy ai chooses. like when it attacks or when it uses a taunt or attempts to flee
    - Taunt will be turned into a one or more turns stun on succes. (Detirmne success rate and how much) and monster can use it too
    - Seduce will be a % chance based to scare the monster away. Wont drop gold, exp or loot 
    - Add spells that are used as item which cost MP to use. If cost > currentMP then player cant use the spell.
    - think of an enemy AI that henefits itself over the user.. So if it see its hp is lower and the user will kill it next turn.. it attempts to flee

    This is it for now 
*/

use PHPUnit\Framework\TestCase;

class MockUserData { 
    public int $userAttack;
    public int $userDefence;
    public int $userHP;

    public function set_details($attack, $defence, $hp) {
        $this->userAttack = $attack;
        $this->userDefence = $defence;
        $this ->userHP = $hp; 
    }

   public function get_Attack() {
        return $this->userAttack;
   }

   public function get_Defence() {
        return $this->userDefence;
   }

   public function get_Hp() {
        return $this->userHP;
   }
}

class MockMonsterData {
    public int $monsterAttack;
    public int $monsterDefence;
    public int $monsterHP;

    public function set_details($attack, $defence, $hp) {
        $this->monsterAttack = $attack;
        $this->monsterDefence = $defence;
        $this ->monsterHP = $hp; 
    }

   public function get_Attack() {
        return $this->monsterAttack;
   }

   public function get_Defence() {
        return $this->monsterDefence;
   }

   public function get_Hp() {
        return $this->monsterHP;
   }
}

class MonsterFightUnitTest extends TestCase
{
    protected function makeUserMockClass() {
        return new MockUserData();
    }

    protected function makeMonsterMockClass() {
        return new MockMonsterData();
    }

    public function test_can_make_mock_classes(): void
    {
        $monster = $this->makeMonsterMockClass();
        $user = $this->makeUserMockClass();

        $this->assertInstanceOf(MockMonsterData::class, $monster);
        $this->assertInstanceOf(MockUserData::class, $user);
    }

    public function test_can_make_user_data() : void {
        $user = $this->makeUserMockClass();
        $user->set_details(50, 50, 100);

        $this->assertEquals(50, $user->userAttack);
        $this->assertEquals(50, $user->userDefence);
        $this->assertEquals(100, $user->userHP);
    }

    public function test_can_make_monster_data() : void {
        $monster = $this->makeMonsterMockClass();
        $monster->set_details(50, 50, 100);

        $this->assertEquals(50, $monster->monsterAttack);
        $this->assertEquals(50, $monster->monsterDefence);
        $this->assertEquals(100, $monster->monsterHP);
    }

    public function test_fight_attempt_with_damage_to_monster_and_user() : void {
        $user = $this->makeUserMockClass();
        $monster = $this->makeMonsterMockClass();

        $user->set_details(100, 50, 500);
        $monster->set_details(75, 50, 500);

        $this->assertEquals(75, $monster->monsterAttack);
        $this->assertEquals(100, $user->userAttack);

        $monsterAttackPower  = $monster->monsterAttack - $user->userDefence;
        $userAttackPower = $user->userAttack - $monster->monsterDefence;

        $newUserHP = $user->userHP - $monsterAttackPower;
        $newMonsterHP = $monster->monsterHP - $userAttackPower;

        $user->set_details($user->userAttack, $user->userDefence, $newUserHP);
        $monster->set_details($monster->monsterAttack, $monster->monsterDefence, $newMonsterHP);

        $this->assertEquals(475, $user->userHP, "User hp dindt match outcome of 475");
        $this->assertEquals(450, $monster->monsterHP, "Monster hp dindt match outcome of 450");
    }

    public function test_if_damage_to_monster_is_0_when_def_eq_atk() : void {
        $user = $this->makeUserMockClass();
        $monster = $this->makeMonsterMockClass();

        $user->set_details(100, 50, 500);
        $monster->set_details(75, 100, 500);

        $this->assertEquals(100, $monster->monsterDefence);
        $this->assertEquals(100, $user->userAttack);

        $userAttackPower = 0; 
        $user->userAttack == $monster->monsterDefence ? $userAttackPower = 0 : $userAttackPower = $user->userAttack - $monster->monsterDefence;
        $newMonsterHP = $monster->monsterHP - $userAttackPower;

        $monster->set_details($monster->monsterAttack, $monster->monsterDefence, $newMonsterHP);
        $this->assertEquals(0, $userAttackPower, "User Attack power not eq to 0.. Dmg calc went worng");
        $this->assertEquals(500, $monster->monsterHP, "Monster hp dindt match outcome of 500, Dmg calc went wrong");
    }
}
