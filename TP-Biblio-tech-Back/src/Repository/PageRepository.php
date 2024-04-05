<?php

namespace App\Repository;

use App\Entity\Page;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Page>
 *
 * @method Page|null find($id, $lockMode = null, $lockVersion = null)
 * @method Page|null findOneBy(array $criteria, array $orderBy = null)
 * @method Page[]    findAll()
 * @method Page[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */

 class PageRepository extends ServiceEntityRepository
 {
     public function __construct(ManagerRegistry $registry)
     {
         parent::__construct($registry, Page::class);
     }
 
     /**
      * Récupère les pages associées à un certain fklivre.
      *
      * @param int $fklivre L'identifiant du livre associé.
      * @return Page[] Un tableau d'objets Page.
      */
     public function findByFkLivre(int $fklivre): array
     {
         return $this->createQueryBuilder('p')
             ->andWhere('p.fk_livre = :value')
             ->setParameter('value', $fklivre)
             ->orderBy('p.id', 'ASC')
             ->getQuery()
             ->getResult();
     }

      /**
     * Supprime un page en fonction de son ID.
     *
     * @param int $pageId L'ID du page à supprimer.
     */
    public function deletePageById(int $pageId): void
    {
        $entityManager = $this->getEntityManager();
        $page = $entityManager->getReference(Page::class, $pageId);
        $entityManager->remove($page);
        $entityManager->flush();
    }
 }